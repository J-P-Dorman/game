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

        // data: undefined,
    // sprites: {},
    // spriteGroup: undefined,
    // currentSpriteKey: "",
    // currentSprite: undefined,
    // isWalking: false,
    // isRunning: false,
    // position: { x: 0, y: 0 },
    // direction: 'down'
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
    })
  };

  const renderActions = {
    npcPlace: createRenderAction({
      id: "npcPlace",
      func: ({ action }) => {
        const { payload } = action;
  
        // If item hasn't loaded yet, do nothing
        if(!state.spriteGroup) {
          console.log('FUCK.');
          return;
        }
  
        state.spriteGroup.position.x = state.position.x;
        state.spriteGroup.position.z = state.position.y;
        state.spriteGroup.position.y = 1;
    
        state.spriteGroup.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);
    
        window.scene.add(state.spriteGroup);
      }
    })
  };

  return { load, logicActions, renderActions };
};

export default Npc;



// const logicActions = {
//   npcTurn: createLogicAction({
//     id: "npcTurn",
//     func: ({ action }) => {
//       const [npcId, direction] = action.payload;

//       state.direction = direction;
//       state.isWalking = false;
//       state.isRunning = false;

//       renderNow(renderActions.npcTurn, [npcId]);
//     },
//     stack: false,
//     payload: [state.data.id, "down"],
//   }),
//   npcMove: createLogicAction({
//     id: "npcMove",
//     func: ({ action }) => {
//       const { id: npcId } = state.data;

//       const [speedX, speedY, isRunning] = action.payload;
//       const isAlreadyRunning = state.isRunning;
//       const isAlreadyWalking = state.isWalking;

//       state.isWalking = !isRunning;
//       state.isRunning = !!isRunning;

//       state.position.x += speedX;
//       state.position.y += speedY;

//       if (!isRunning && !isAlreadyWalking) {
//         removeAllFromRenderQueue2([
//           {id: "npcTurn", payload: [npcId]},
//           {id: "npcRun", payload: [npcId]},
//           {id: "npcStopWalk", payload: [npcId]},
//         ]);
//         dispatchRender(renderActions.npcWalk, [npcId]);
//       }

//       if (isRunning && !isAlreadyRunning) {
//         removeAllFromRenderQueue2([
//           {id: "npcTurn", payload: [npcId]},
//           {id: "npcWalk", payload: [npcId]},
//           {id: "npcStop", payload: [npcId]},
//         ]);
//         dispatchRender(renderActions.npcRun, [npcId]);
//       }
//     },
//     repeat: true,
//     stack: false,
//     payload: [0, 0],
//   }),
//   npcStop: createLogicAction({
//     id: "npcStop",
//     func: () => {
//       const { id: npcId } = state.data;

//       state.isWalking = false;
//       state.isRunning = false;

//       removeAllFromLogicQueue2([{id: "npcMove", payload: [npcId]}]);

//       removeAllFromRenderQueue2([
//         {id: "npcWalk", payload: [npcId]},
//         {id: "npcRun", payload: [npcId]},
//       ]);
//     },
//     repeat: false,
//     stack: false,
//     payload: [],
//   }),
// };

// const renderActions = {
//   npcTurn: createRenderAction({
//     id: "npcTurn",
//     func: () => {
//       const key = directionToKey(state.direction, "turn");

//       console.log('turn render!');
//       console.log('key: ', key);

//       // Hide the last frame
//       state.currentSprite.visible = false;

//       // Update values
//       state.currentSpriteKey = key;
//       state.currentSprite = state.sprites[key];

//       // Show next frame
//       state.sprites[key].visible = true;
//     },
//     stack: false,
//     payload: [],
//     maxTime: 0,
//   }),
//   npcWalk: createRenderAction({
//     id: "npcWalk",
//     func: () => {
//       const direction = window.state.player.direction;
//       const keyPartial = directionToKey(direction, "walk") as AnimationKey;
//       const animation = playerData.spriteSheet.animationMap[keyPartial];
//       const { frames, end } = animation;

//       const currentFrameIndex = frames.findIndex(
//         (frame: any) => frame === state.currentSpriteKey
//       );
//       const nextFrameIndex = frames[currentFrameIndex + 1]
//         ? currentFrameIndex + 1
//         : 0;
//       const nextFrameKey = frames[nextFrameIndex];

//       // Don't double up running and walking
//       removeAllFromRenderQueue(["playerRun", "playerStopWalk"]);

//       // Hide current frame
//       state.currentSprite.visible = false;

//       // Add next frame
//       state.currentSpriteKey = nextFrameKey;
//       state.currentSprite = state.sprites[nextFrameKey];
//       state.sprites[nextFrameKey].visible = true;
//     },
//     repeat: true,
//     stack: false,
//     payload: [],
//     maxTime: 150,
//   }),
//   npcRun: createRenderAction({
//     id: "npcRun",
//     func: () => {
//       const direction = window.state.player.direction;
//       const keyPartial = directionToKey(direction, "run") as AnimationKey;
//       const animation = playerData.spriteSheet.animationMap[keyPartial];
//       const { frames, end } = animation;

//       const currentFrameIndex = frames.findIndex(
//         (frame: any) => frame === state.currentSpriteKey
//       );
//       const nextFrameIndex = frames[currentFrameIndex + 1]
//         ? currentFrameIndex + 1
//         : 0;
//       const nextFrameKey = frames[nextFrameIndex];

//       // Don't double up running and walking
//       removeAllFromRenderQueue(["playerWalk", "playerStopWalk"]);

//       // Hide current frame
//       state.currentSprite.visible = false;

//       // Add next frame
//       state.currentSpriteKey = nextFrameKey;
//       state.currentSprite = state.sprites[nextFrameKey];
//       state.sprites[nextFrameKey].visible = true;
//     },
//     repeat: true,
//     stack: false,
//     payload: [],
//     maxTime: 80,
//   }),
//   npcStopWalk: createRenderAction({
//     id: "npcStopWalk",
//     func: () => {
//       const keyPartial = state.currentSpriteKey.replace(
//         /[0-9]/g,
//         ""
//       ) as AnimationKey;
//       const animation = playerData.spriteSheet.animationMap[keyPartial] ?? {
//         frames: [],
//         end: undefined,
//       };
//       const { end } = animation;

//       if (end) {
//         // Hide current frame
//         state.currentSprite.visible = false;

//         // Add next frame
//         state.currentSpriteKey = end;
//         state.currentSprite = state.sprites[end];
//         state.sprites[end].visible = true;
//       }
//     },
//     repeat: false,
//     stack: false,
//     payload: [],
//     maxTime: 0,
//   }),
// };