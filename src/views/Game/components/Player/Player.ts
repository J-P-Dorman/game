import {
  arrayToObject,
  filterObject,
  loadSvgSheet,
  numberFromString,
} from "../../../../utils";
import { playerData } from "../../../../data/creatures/player";
import * as THREE from "three";
import { AnimationKey, Direction } from "./types";
import { createLogicAction } from "../GameLoops/LogicLoop/utils";
import {
  createRenderAction,
  dispatchRender,
  removeAllFromRenderQueue,
  renderNow,
} from "../GameLoops/RenderLoop/utils";
import { playerRunSpeed } from "./constants";
import { AttachToCamera } from "../Camera/types";
import { Area } from "../../types";

const Player = () => {
  // Local state
  // ===========================================================================
  let playerSprites: Record<string, THREE.Group> = {};
  let playerSpriteGroup = undefined;
  let currentSpriteKey = "";
  let currentSprite: THREE.Group = undefined;

  // Private Methods
  // ===========================================================================
  const directionToKey = (direction: Direction, prefix?: string) =>
    `${prefix}${direction[0].toUpperCase()}${direction.slice(1)}`;

  // Public Methods
  // ===========================================================================
  const load = ({attachToCamera}: { attachToCamera: AttachToCamera } ) => {
    const { id, spriteSheet, size } = playerData;
    const { image, spriteWidth, spriteHeight, sheetWidth, sheetHeight } =
      spriteSheet;
    const { defaultSprite } = spriteSheet;

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

        const keys = playerData.spriteSheet.sheetMap.flat();
        const spriteList = arrayToObject(keys, sprites);

        sprites.forEach((sprite) => {
          spriteGroup.add(sprite);
        });

        // Initialise the player as the top left sprite
        sprites.forEach((sprite, i) => {
          if (i !== 0) sprite.visible = false;
        });
        currentSpriteKey = keys[0];
        currentSprite = sprites[0];

        const maxPixels =
          spriteWidth > spriteHeight ? spriteWidth : spriteHeight;
        const size1 = 1 / maxPixels;
        const newSize = size1 * size;

        spriteGroup.position.set(0, 0, -2);
        spriteGroup.scale.set(newSize, newSize, newSize);

        attachToCamera(() => spriteGroup);

        playerSpriteGroup = spriteGroup;
        playerSprites = spriteList;
      }
    );
  };

  // Actions
  // ===========================================================================
  const logicActions = {
    playerTurn: createLogicAction({
      id: "playerTurn",
      func: ({ action }) => {
        const [direction] = action.payload;

        window.state.player.direction = direction;
        window.state.player.isWalking = false;
        window.state.player.isRunning = false;

        renderNow(renderActions.playerTurn);
      },
      stack: false,
      payload: ["down"],
    }),
    // Always turn before you move
    playerMove: createLogicAction({
      id: "playerMove",
      func: ({ action }) => {
        const [speedX, speedY, isRunning] = action.payload;
        const isAlreadyRunning = window.state.player.isRunning;
        const isAlreadyWalking = window.state.player.isWalking;

        window.state.player.isWalking = !isRunning;
        window.state.player.isRunning = !!isRunning;

        if (!isRunning && !isAlreadyWalking) {
          removeAllFromRenderQueue([
            "playerTurn",
            "playerRun",
            "playerStopWalk",
          ]);
          dispatchRender(renderActions.playerWalk);
        }
        if (isRunning && !isAlreadyRunning) {
          removeAllFromRenderQueue([
            "playerTurn",
            "playerWalk",
            "playerStopWalk",
          ]);
          dispatchRender(renderActions.playerRun);
        }
      },
      repeat: true,
      stack: false,
      payload: [0, 0],
    }),
    playerStop: createLogicAction({
      id: "playerStop",
      func: () => {
        window.state.player.isWalking = false;
        window.state.player.isRunning = false;
      },
      repeat: false,
      stack: false,
      payload: [0, 0],
    }),
    playerInteract: createLogicAction({
      id: "playerInteract",
      func: () => {
        const { creatures } = window.state;

        Object.values(creatures).forEach((creature) => {
          const { colliders, onInteract } = creature;
          const { interact } = colliders;

          if(!interact) return;

          const withinCollider = (collider: Area, x: number, y: number) => {
            const { x1y1, x2y1, x1y2, x2y2 } = collider;
            const isWithinXBounds = (x > x1y1.x && x > x1y2.x)
              && (x < x2y1.x && x < x2y2.x);
            const isWithinYBounds = (y > x1y1.y && y > x2y1.y)
            && (y < x2y2.y && y < x2y2.y);

            return isWithinXBounds && isWithinYBounds;
          }

          const isWithinCollider = withinCollider(
            interact,
            Math.abs(window.state.player.position.x),
            Math.abs(window.state.player.position.y)
          );

          if(isWithinCollider) onInteract();
        });
      },
      repeat: false,
      stack: false,
      payload: [0, 0],
    }),
  };



  const renderActions = {
    playerTurn: createRenderAction({
      id: "playerTurn",
      func: () => {
        const direction = window.state.player.direction;
        const key = directionToKey(direction, "turn");
  
        currentSprite.visible = false;
  
        currentSpriteKey = key;
        currentSprite = playerSprites[key];
  
        playerSprites[key].visible = true;
      },
      stack: false,
      payload: [],
      maxTime: 0,
    }),
    playerWalk: createRenderAction({
      id: "playerWalk",
      func: () => {
        const direction = window.state.player.direction;
        const keyPartial = directionToKey(direction, "walk") as AnimationKey;
        const animation = playerData.spriteSheet.animationMap[keyPartial];
        const { frames, end } = animation;
  
        const currentFrameIndex = frames.findIndex(
          (frame: any) => frame === currentSpriteKey
        );
        const nextFrameIndex = frames[currentFrameIndex + 1]
          ? currentFrameIndex + 1
          : 0;
        const nextFrameKey = frames[nextFrameIndex];
  
        // Don't double up running and walking
        removeAllFromRenderQueue(["playerRun", "playerStopWalk"]);
  
        // Hide current frame
        currentSprite.visible = false;
  
        // Add next frame
        currentSpriteKey = nextFrameKey;
        currentSprite = playerSprites[nextFrameKey];
        playerSprites[nextFrameKey].visible = true;
      },
      repeat: true,
      stack: false,
      payload: [],
      maxTime: 150,
    }),
    playerRun: createRenderAction({
      id: "playerRun",
      func: () => {
        const direction = window.state.player.direction;
        const keyPartial = directionToKey(direction, "run") as AnimationKey;
        const animation = playerData.spriteSheet.animationMap[keyPartial];
        const { frames, end } = animation;
  
        const currentFrameIndex = frames.findIndex(
          (frame: any) => frame === currentSpriteKey
        );
        const nextFrameIndex = frames[currentFrameIndex + 1]
          ? currentFrameIndex + 1
          : 0;
        const nextFrameKey = frames[nextFrameIndex];
  
        // Don't double up running and walking
        removeAllFromRenderQueue(["playerWalk", "playerStopWalk"]);
  
        // Hide current frame
        currentSprite.visible = false;
  
        // Add next frame
        currentSpriteKey = nextFrameKey;
        currentSprite = playerSprites[nextFrameKey];
        playerSprites[nextFrameKey].visible = true;
      },
      repeat: true,
      stack: false,
      payload: [],
      maxTime: 80,
    }),
    playerStopWalk: createRenderAction({
      id: "playerStopWalk",
      func: () => {
        const keyPartial = currentSpriteKey.replace(
          /[0-9]/g,
          ""
        ) as AnimationKey;
        const animation = playerData.spriteSheet.animationMap[keyPartial] ?? {
          frames: [],
          end: undefined,
        };
        const { end } = animation;

        if (end) {
          // Hide current frame
          currentSprite.visible = false;

          // Add next frame
          currentSpriteKey = end;
          currentSprite = playerSprites[end];
          playerSprites[end].visible = true;
        }
      },
      repeat: false,
      stack: false,
      payload: [],
      maxTime: 0,
    }),
  };

  return { load, logicActions, renderActions };
};

export default Player;
