import * as THREE from "three";
import { playerData } from "../../../../../../data/creatures/player";
import {
  arrayToObject,
  initialiseSprites,
  loadSvgSheet
} from "../../../../../../utils/index";
import { createLogicAction, removeAllFromLogicQueue, removeAllFromLogicQueue2 } from "../../../GameLoops/LogicLoop/utils";
import {
  createRenderAction,
  dispatchRender,
  removeAllFromRenderQueue,
  removeAllFromRenderQueue2,
  renderNow,
} from "../../../GameLoops/RenderLoop/utils";
import { AnimationKey, Direction, LoadArgs, State } from "./types";
import { calculateReachablePoints, getBetweenCoordinates } from './helpers';

type SpriteSheet = {
	image: string;
	spriteWidth: number;
	spriteHeight: number;
	sheetWidth: number;
	sheetHeight: number;
	defaultSprite: string;
	defaultAnimation: string;
	sheetMap: string[][];
	animationMap: Record<
		string,
		{
			frames: string[];
			loop: boolean;
			fps: number;
			end?: string;
		}
	>;
};

const Npc = () => {
  const state: State = {
    spriteSheet: undefined,
    size: 0,
    onInteract: () => {},
    currentSpriteKey: undefined,
    currentSprite: undefined,
    spriteGroup: undefined,
    spriteList: undefined,
    position: { x: 0, y: 0 },
    movement: {
      direction: 'down',
      path: [],
      currentIndex: 0,
      speed: 0,
      loop: false
    }
  };

  // Private Methods
  // ===========================================================================
  const directionToKey = (direction: Direction, prefix?: string) =>
    `${prefix}${direction[0].toUpperCase()}${direction.slice(1)}`;
  
  // Public Methods
  // ===========================================================================
  const load = async ({creatureData}: LoadArgs) => {
    const { spriteSheet, size, onInteract } = creatureData;
    const {
      image,
      spriteWidth,
      spriteHeight,
      sheetWidth,
      sheetHeight,
      defaultSprite,
      defaultAnimation,
      sheetMap,
      animationMap
    } = spriteSheet;

    state.spriteSheet = spriteSheet;
    state.size = size;
    state.onInteract = onInteract;

    loadSvgSheet(
      image,
      sheetWidth,
      sheetHeight,
      spriteWidth,
      spriteHeight,
      true,
      (svgGroup) => {
        const spriteGroup = new THREE.Group();
        const sprites = svgGroup
          .flat()
          .filter((sprite) => sprite !== undefined);

        const keys = sheetMap.flat();
        const spriteList = arrayToObject(keys, sprites);

        sprites.forEach((sprite) => {
          spriteGroup.add(sprite);
        });

        // Initialise the player as the top left sprite
        sprites.forEach((sprite, i) => {
          if (i !== 0) sprite.visible = false;
        });
        state.currentSpriteKey = keys[0];
        state.currentSprite = sprites[0];

        const maxPixels =
        spriteWidth > spriteHeight ? spriteWidth : spriteHeight;
        const size1 = 1 / maxPixels;
        const newSize = size1 * size;

        spriteGroup.scale.set(newSize, newSize, newSize);

        state.spriteGroup = spriteGroup;
        state.spriteList = spriteList;
      }
    );
  };

  // Actions
  // ===========================================================================
  const logicActions = {
    npcPlace: createLogicAction({
      id: "npcPlace",
      func: ({ action }) => {
        const { payload } = action;
        const [ x, y ] = payload;

        state.position.x += x;
        state.position.y += y;
      }
    }),
    npcNewPath: createLogicAction({
      id: "npcNewPath",
      func: ({ action }) => {
        const { payload } = action;
        const [ path, speed, loop ] = payload;

        state.movement.path = path;
        state.movement.currentIndex = 0;
        state.movement.speed = speed;
        state.movement.loop = loop;
      }
    }),
    npcMove: createLogicAction({
      id: "npcMove",
      func: ({ action }) => {
        const { position, movement } = state;
        const { x, y } = position;
        const { path, currentIndex, speed, loop } = movement;

        const currentDirection = state.movement.direction;

        // If item hasn't loaded yet, do nothing
        if(!state.spriteGroup) return;

        if(speed > path.length + 3) {
          console.error(
            'Cannot set such a high speed with so few path points. Please add more path points or reduce speed'
          )
          return;
        }

        const startingPoint = { x, y };

        // Figure out how much of the path you can traverse this tick
        const [
          reachablePoints,
          lastReachableIndex,
          leftoverSpeed,
          destinationPoint
         ] = calculateReachablePoints({
          x,
          y,
          startIndex: currentIndex,
          path,
          speed,
          loop
        });

        // Take the speed remainder and calculate the current
        // between coodinates this frame
        const [ nextX, nextY ] = getBetweenCoordinates(
          reachablePoints.at(-1) ?? startingPoint,
          destinationPoint,
          leftoverSpeed
        );

        const index = lastReachableIndex &&
          lastReachableIndex > 0 ? lastReachableIndex : 0;

        const direction = ((): Direction => {
          const lastX = reachablePoints.at(-1)?.x ?? startingPoint.x;
          const lastY = reachablePoints.at(-1)?.y ?? startingPoint.y;

          const isMovingLeft = nextX < lastX;
          const isMovingRight = nextX > lastX;
          const isMovingDown = nextY > lastY;
          const isMovingUp = nextY < lastY;

          // Figure out what direction you're moving in
          if(isMovingDown && !isMovingLeft && !isMovingRight) return 'down';
          if(isMovingUp && !isMovingLeft && !isMovingRight) return 'up';
          if(isMovingLeft && !isMovingUp && !isMovingDown) return 'left';
          if(isMovingRight && !isMovingUp && !isMovingDown) return 'right';

          if(isMovingDown && isMovingLeft) return 'downLeft';
          if(isMovingDown && isMovingRight) return 'downRight';
          if(isMovingUp && isMovingLeft) return 'upLeft';
          if(isMovingUp && isMovingRight) return 'upRight';
        })();

        state.position.x = nextX;
        state.position.y = nextY;
        state.movement.currentIndex = index;
        state.movement.direction = direction;

        // Render snap turn so the character doesn't ski
        if(currentDirection !== direction) renderNow(renderActions.npcTurn);

        const isLastTickHighSpeed = speed >= 1 && index + speed > path.length -1;
        const isLastTickLowSpeed = speed < 1 && index === path.length -1 && leftoverSpeed === 0;
        const isLastTick = !loop && (isLastTickHighSpeed || isLastTickLowSpeed);

        return [isLastTick];
      },
      repeat: ([isLastTick]) => {
        return !isLastTick;
      }
    })
  };

  const renderActions = {
    npcPlace: createRenderAction({
      id: "npcPlace",
      func: ({ action }) => {
        // If item hasn't loaded yet, do nothing
        if(!state.spriteGroup) return [false];
  
        state.spriteGroup.position.x = state.position.x;
        state.spriteGroup.position.z = state.position.y;
        state.spriteGroup.position.y = 1;
    
        state.spriteGroup.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);
    
        window.scene.add(state.spriteGroup);

        return [true];
      },
      repeat: ([hasRun]) => {
        return !hasRun;
      }
    }),
    npcMove: createRenderAction({
      id: "npcMove",
      func: ({ action }) => {
        if(!state.spriteGroup) return;
  
        state.spriteGroup.position.x = state.position.x;
        state.spriteGroup.position.z = state.position.y;
      },
      repeat: true
    }),
    npcTurn: createRenderAction({
      id: "npcTurn",
      func: ({ action }) => {
        if(!state.spriteGroup) return;

        const { spriteSheet, movement } = state;
        const { animationMap } = spriteSheet;
        const { direction } = movement;

        const spriteKeyPartial = direction[0].toLocaleUpperCase() + direction.slice(1);
        const nextSpriteKey = `turn${spriteKeyPartial}`;
        const nextSprite = state.spriteList[nextSpriteKey];

        if(state.currentSpriteKey !== nextSpriteKey) {
          state.currentSprite.visible = false;
          nextSprite.visible = true;

          state.currentSpriteKey = nextSpriteKey;
          state.currentSprite = nextSprite;
        }
      }
    }),
    npcWalk: createRenderAction({
      id: "npcWalk",
      func: ({ action }) => {
        if(!state.spriteGroup) return;

        const { spriteSheet, movement } = state;
        const { animationMap } = spriteSheet;
        const { direction } = movement;

        const animationKeyPartial = direction[0].toLocaleUpperCase() + direction.slice(1);
        const animationKey = `walk${animationKeyPartial}`;
        const animation = animationMap[animationKey];
        const { frames, end } = animation;
        
        const currentFrameIndex = frames.indexOf(state.currentSpriteKey);
        const currentFrameIndex2 = currentFrameIndex > 0 ? currentFrameIndex : 0;
        const nextFrameIndex = currentFrameIndex2 + 1 > frames.length - 1 ? 0 : currentFrameIndex2 + 1;

        const nextFrameKey = frames[nextFrameIndex];
        const nextFrame = state.spriteList[nextFrameKey];

        if(state.currentSpriteKey !== nextFrameKey) {
          state.currentSprite.visible = false;
          nextFrame.visible = true;

          state.currentSpriteKey = nextFrameKey;
          state.currentSprite = nextFrame;
        }
      },
      repeat: true,
      maxTime: 100
    }),
  };

  return { load, logicActions, renderActions };
};

export default Npc;
