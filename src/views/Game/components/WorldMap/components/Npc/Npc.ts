import * as THREE from "three";
import { arrayToObject, loadSvgSheet } from "../../../../../../utils/index";
import { Area } from "../../../../types";
import { createLogicAction } from "../../../GameLoops/LogicLoop/utils";
import {
  createRenderAction,
  renderNow,
} from "../../../GameLoops/RenderLoop/utils";
import { calculateReachablePoints, getBetweenCoordinates } from "./helpers";
import { Direction, LoadArgs, State } from "./types";

const Npc = () => {
  const state: State = {
    id: undefined,
    spriteSheet: undefined,
    size: 0,
    onInteract: () => {},
    currentSpriteKey: undefined,
    currentSprite: undefined,
    spriteGroup: undefined,
    spriteList: undefined,
    position: { x: 0, y: 0 },
    colliders: {},
    movement: {
      direction: "down",
      path: [],
      currentIndex: 0,
      speed: 0,
      loop: false,
    },
  };

  // Public Methods
  // ===========================================================================
  const load = ({ creatureData, onInteract }: LoadArgs) => {
    const { id, spriteSheet, size } = creatureData;
    const {
      image,
      spriteWidth,
      spriteHeight,
      sheetWidth,
      sheetHeight,
      sheetMap,
    } = spriteSheet;

    // Sync to local state
    state.id = id;
    state.spriteSheet = spriteSheet;
    state.size = size;
    state.onInteract = onInteract;

    // Load sprites
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

  const calculateCollider = (
    positionX: number,
    positionY: number,
    size: number,
    padding: number
  ): Area => {
    const fullPadding = padding * 2;
    const mod = size / 2 + fullPadding;

    return {
      x1y1: { x: positionX - mod, y: positionY - mod },
      x2y1: { x: positionX + mod, y: positionY - mod },
      x1y2: { x: positionX - mod, y: positionY + mod },
      x2y2: { x: positionX + mod, y: positionY + mod },
    };
  };

  const syncState = () => {
    window.state.creatures[state.id] = state;
  };

  // Actions
  // ===========================================================================
  const logicActions = {
    npcPlace: createLogicAction({
      id: "npcPlace",
      func: ({ action }) => {
        const { payload } = action;
        const [x, y]: number[] = payload;

        const { id, size, spriteSheet } = state;
        const { spriteWidth, spriteHeight } = spriteSheet;

        if (!id) return [true];

        // Update position
        state.position.x += x;
        state.position.y += y;

        // Update collision
        const maxPixels =
          spriteWidth > spriteHeight ? spriteWidth : spriteHeight;
        const size1 = 1 / maxPixels;
        const newSize = size1 * size;

        const interactTrigger = calculateCollider(x, y, newSize, 1);

        state.colliders.interact = interactTrigger;

        syncState();

        return [false];
      },
      repeat: ([repeat]) => repeat,
    }),
    npcNewPath: createLogicAction({
      id: "npcNewPath",
      func: ({ action }) => {
        const { payload } = action;
        const [path, speed, loop] = payload;

        state.movement.path = path;
        state.movement.currentIndex = 0;
        state.movement.speed = speed;
        state.movement.loop = loop;
      },
    }),
    npcMove: createLogicAction({
      id: "npcMove",
      func: () => {
        const { position, movement } = state;
        const { x, y } = position;
        const { path, currentIndex, speed, loop } = movement;

        const currentDirection = state.movement.direction;

        // If item hasn't loaded yet, do nothing
        if (!state.spriteGroup) return;

        if (speed > path.length + 3) {
          console.error(
            "Cannot set such a high speed with so few path points. Please add more path points or reduce speed"
          );
          return;
        }

        const startingPoint = { x, y };

        // Figure out how much of the path you can traverse this tick
        const [
          reachablePoints,
          lastReachableIndex,
          leftoverSpeed,
          destinationPoint,
        ] = calculateReachablePoints({
          x,
          y,
          startIndex: currentIndex,
          path,
          speed,
          loop,
        });

        // Take the speed remainder and calculate the current
        // between coodinates this frame
        const [nextX, nextY] = getBetweenCoordinates(
          reachablePoints.at(-1) ?? startingPoint,
          destinationPoint,
          leftoverSpeed
        );

        const index =
          lastReachableIndex && lastReachableIndex > 0 ? lastReachableIndex : 0;

        const direction = ((): Direction => {
          const lastX = reachablePoints.at(-1)?.x ?? startingPoint.x;
          const lastY = reachablePoints.at(-1)?.y ?? startingPoint.y;

          const isMovingLeft = nextX < lastX;
          const isMovingRight = nextX > lastX;
          const isMovingDown = nextY > lastY;
          const isMovingUp = nextY < lastY;

          // Figure out what direction you're moving in
          if (isMovingDown && !isMovingLeft && !isMovingRight) return "down";
          if (isMovingUp && !isMovingLeft && !isMovingRight) return "up";
          if (isMovingLeft && !isMovingUp && !isMovingDown) return "left";
          if (isMovingRight && !isMovingUp && !isMovingDown) return "right";

          if (isMovingDown && isMovingLeft) return "downLeft";
          if (isMovingDown && isMovingRight) return "downRight";
          if (isMovingUp && isMovingLeft) return "upLeft";
          if (isMovingUp && isMovingRight) return "upRight";
        })();

        state.position.x = nextX;
        state.position.y = nextY;
        state.movement.currentIndex = index;
        state.movement.direction = direction;

        // Render snap turn so the character doesn't ski
        if (currentDirection !== direction) renderNow(renderActions.npcTurn);

        const isLastTickHighSpeed =
          speed >= 1 && index + speed > path.length - 1;
        const isLastTickLowSpeed =
          speed < 1 && index === path.length - 1 && leftoverSpeed === 0;
        const isLastTick = !loop && (isLastTickHighSpeed || isLastTickLowSpeed);

        return [isLastTick];
      },
      repeat: ([isLastTick]) => {
        return !isLastTick;
      },
    }),
  };

  const renderActions = {
    npcPlace: createRenderAction({
      id: "npcPlace",
      func: () => {
        // If item hasn't loaded yet, do nothing
        if (!state.spriteGroup) return [false];

        state.spriteGroup.position.x = state.position.x;
        state.spriteGroup.position.z = state.position.y;
        state.spriteGroup.position.y = 1;

        state.spriteGroup.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);

        window.scene.add(state.spriteGroup);

        return [true];
      },
      repeat: ([hasRun]) => {
        return !hasRun;
      },
    }),
    npcMove: createRenderAction({
      id: "npcMove",
      func: () => {
        if (!state.spriteGroup) return;

        state.spriteGroup.position.x = state.position.x;
        state.spriteGroup.position.z = state.position.y;
      },
      repeat: true,
    }),
    npcTurn: createRenderAction({
      id: "npcTurn",
      func: () => {
        if (!state.spriteGroup) return;

        const { movement } = state;
        const { direction } = movement;

        const spriteKeyPartial =
          direction[0].toLocaleUpperCase() + direction.slice(1);
        const nextSpriteKey = `turn${spriteKeyPartial}`;
        const nextSprite = state.spriteList[nextSpriteKey];

        if (state.currentSpriteKey !== nextSpriteKey) {
          state.currentSprite.visible = false;
          nextSprite.visible = true;

          state.currentSpriteKey = nextSpriteKey;
          state.currentSprite = nextSprite;
        }
      },
    }),
    npcWalk: createRenderAction({
      id: "npcWalk",
      func: () => {
        if (!state.spriteGroup) return;

        const { spriteSheet, movement } = state;
        const { animationMap } = spriteSheet;
        const { direction } = movement;

        const animationKeyPartial =
          direction[0].toLocaleUpperCase() + direction.slice(1);
        const animationKey = `walk${animationKeyPartial}`;
        const animation = animationMap[animationKey];
        const { frames, end } = animation;

        const currentFrameIndex = frames.indexOf(state.currentSpriteKey);
        const currentFrameIndex2 =
          currentFrameIndex > 0 ? currentFrameIndex : 0;
        const nextFrameIndex =
          currentFrameIndex2 + 1 > frames.length - 1
            ? 0
            : currentFrameIndex2 + 1;

        const nextFrameKey = frames[nextFrameIndex];
        const nextFrame = state.spriteList[nextFrameKey];

        if (state.currentSpriteKey !== nextFrameKey) {
          state.currentSprite.visible = false;
          nextFrame.visible = true;

          state.currentSpriteKey = nextFrameKey;
          state.currentSprite = nextFrame;
        }
      },
      repeat: true,
      maxTime: 100,
    }),
  };

  return { load, logicActions, renderActions };
};

export default Npc;
