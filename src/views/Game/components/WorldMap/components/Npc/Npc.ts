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
    width: 0,
    height: 0,
    onInteract: () => {},
    currentSpriteKey: undefined,
    currentSprite: undefined,
    spriteGroup: undefined,
    spriteList: undefined,
    position: { x: 0, y: 0 },
    movement: {
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
    const { spriteSheet, width, height, onInteract } = creatureData;
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
    state.width = width;
    state.height = height;
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

        spriteGroup.position.set(-2, -2, -2);
        spriteGroup.scale.set((1 / spriteHeight) * width, (1 / spriteHeight) * height, 0.05);

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

        dispatchRender(renderActions.npcPlace);
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
          loop: false
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

        state.position.x = nextX;
        state.position.y = nextY;
        state.movement.currentIndex = index;

        const isLastTickHighSpeed = speed >= 1 && index + speed > path.length -1;
        const isLastTickLowSpeed = speed < 1 && index === path.length -1 && leftoverSpeed === 0;
        const isLastTick = isLastTickHighSpeed || isLastTickLowSpeed;

        return [isLastTick];
      },
      repeat: ([isLastTick]) => {
        return !isLastTick;
      },
      maxTime: 20
    })
  };

  const renderActions = {
    npcPlace: createRenderAction({
      id: "npcPlace",
      func: ({ action }) => {
        const { payload } = action;
  
        // If item hasn't loaded yet, do nothing
        if(!state.spriteGroup) {
          console.log('Race condition error');
          return;
        }
  
        state.spriteGroup.position.x = state.position.x;
        state.spriteGroup.position.z = state.position.y;
        state.spriteGroup.position.y = 1;
    
        state.spriteGroup.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);
    
        window.scene.add(state.spriteGroup);
      }
    }),
    npcMove: createRenderAction({
      id: "npcMove",
      func: ({ action }) => {
        const { payload } = action;
  
        state.spriteGroup.position.x = state.position.x;
        state.spriteGroup.position.z = state.position.y;
      },
      repeat: true
    })
  };

  return { load, logicActions, renderActions };
};

export default Npc;
