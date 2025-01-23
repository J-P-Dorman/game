import { playerData } from "../../../../data/creatures/player";
import {
  initialiseSprites,
  loadSvgSheet
} from "../../../../utils/index";
import { createLogicAction, removeAllFromLogicQueue, removeAllFromLogicQueue2 } from "../GameLoops/LogicLoop/utils";
import {
  createRenderAction,
  dispatchRender,
  removeAllFromRenderQueue,
  removeAllFromRenderQueue2,
  renderNow,
} from "../GameLoops/RenderLoop/utils";
import { AnimationKey, Direction, LoadArgs, State } from "./types";

const Npc = () => {
  const state: State = {
    npcData: undefined,
    sprites: {},
    spriteGroup: undefined,
    currentSpriteKey: "",
    currentSprite: undefined,
    isWalking: false,
    isRunning: false,
    position: { x: 0, y: 0 },
    direction: 'down'
  };

    // Private Methods
    // ===========================================================================
    const directionToKey = (direction: Direction, prefix?: string) =>
      `${prefix}${direction[0].toUpperCase()}${direction.slice(1)}`;
  

  // Public Methods
  // ===========================================================================
  const load = async ({ npcData }: LoadArgs) => {
    const { spriteSheet } = npcData;
    const { defaultSprite, sheetMap } = spriteSheet;

    const { image, spriteWidth, spriteHeight, sheetWidth, sheetHeight } =
      spriteSheet;

    const keys = sheetMap.flat();

    const {spritesObj, spriteGroup } = await loadSvgSheet(
      image,
      sheetWidth,
      sheetHeight,
      spriteWidth,
      spriteHeight,
      true,
      (spriteSheet) => initialiseSprites(spriteSheet, keys, defaultSprite)
    );

    // Update instance state
    state.npcData = npcData;
    state.currentSpriteKey = defaultSprite;
    state.currentSprite = spritesObj[defaultSprite];
    state.spriteGroup = spriteGroup;
    state.sprites = spritesObj;
  };

  // Actions
  // ===========================================================================
  const logicActions = {
    npcTurn: createLogicAction({
      id: "npcTurn",
      func: ({ action }) => {
        const [npcId, direction] = action.payload;

        state.direction = direction;
        state.isWalking = false;
        state.isRunning = false;

        renderNow(renderActions.npcTurn, [npcId]);
      },
      stack: false,
      payload: [state.npcData.id, "down"],
    }),
    npcMove: createLogicAction({
      id: "npcMove",
      func: ({ action }) => {
        const { id: npcId } = state.npcData;

        const [speedX, speedY, isRunning] = action.payload;
        const isAlreadyRunning = state.isRunning;
        const isAlreadyWalking = state.isWalking;

        state.isWalking = !isRunning;
        state.isRunning = !!isRunning;

        state.position.x += speedX;
        state.position.y += speedY;

        if (!isRunning && !isAlreadyWalking) {
          removeAllFromRenderQueue2([
            {id: "npcTurn", payload: [npcId]},
            {id: "npcRun", payload: [npcId]},
            {id: "npcStopWalk", payload: [npcId]},
          ]);
          dispatchRender(renderActions.npcWalk, [npcId]);
        }

        if (isRunning && !isAlreadyRunning) {
          removeAllFromRenderQueue2([
            {id: "npcTurn", payload: [npcId]},
            {id: "npcWalk", payload: [npcId]},
            {id: "npcStop", payload: [npcId]},
          ]);
          dispatchRender(renderActions.npcRun, [npcId]);
        }
      },
      repeat: true,
      stack: false,
      payload: [0, 0],
    }),
    npcStop: createLogicAction({
      id: "npcStop",
      func: () => {
        const { id: npcId } = state.npcData;

        state.isWalking = false;
        state.isRunning = false;

        removeAllFromLogicQueue2([{id: "npcMove", payload: [npcId]}]);

        removeAllFromRenderQueue2([
          {id: "npcWalk", payload: [npcId]},
          {id: "npcRun", payload: [npcId]},
        ]);
      },
      repeat: false,
      stack: false,
      payload: [],
    }),
  };

  const renderActions = {
    npcTurn: createRenderAction({
      id: "npcTurn",
      func: () => {
        const key = directionToKey(state.direction, "turn");

        console.log('turn render!');
        console.log('key: ', key);
  
        // Hide the last frame
        state.currentSprite.visible = false;
  
        // Update values
        state.currentSpriteKey = key;
        state.currentSprite = state.sprites[key];
  
        // Show next frame
        state.sprites[key].visible = true;
      },
      stack: false,
      payload: [],
      maxTime: 0,
    }),
    npcWalk: createRenderAction({
      id: "npcWalk",
      func: () => {
        const direction = window.state.player.direction;
        const keyPartial = directionToKey(direction, "walk") as AnimationKey;
        const animation = playerData.spriteSheet.animationMap[keyPartial];
        const { frames, end } = animation;
  
        const currentFrameIndex = frames.findIndex(
          (frame: any) => frame === state.currentSpriteKey
        );
        const nextFrameIndex = frames[currentFrameIndex + 1]
          ? currentFrameIndex + 1
          : 0;
        const nextFrameKey = frames[nextFrameIndex];
  
        // Don't double up running and walking
        removeAllFromRenderQueue(["playerRun", "playerStopWalk"]);
  
        // Hide current frame
        state.currentSprite.visible = false;
  
        // Add next frame
        state.currentSpriteKey = nextFrameKey;
        state.currentSprite = state.sprites[nextFrameKey];
        state.sprites[nextFrameKey].visible = true;
      },
      repeat: true,
      stack: false,
      payload: [],
      maxTime: 150,
    }),
    npcRun: createRenderAction({
      id: "npcRun",
      func: () => {
        const direction = window.state.player.direction;
        const keyPartial = directionToKey(direction, "run") as AnimationKey;
        const animation = playerData.spriteSheet.animationMap[keyPartial];
        const { frames, end } = animation;
  
        const currentFrameIndex = frames.findIndex(
          (frame: any) => frame === state.currentSpriteKey
        );
        const nextFrameIndex = frames[currentFrameIndex + 1]
          ? currentFrameIndex + 1
          : 0;
        const nextFrameKey = frames[nextFrameIndex];
  
        // Don't double up running and walking
        removeAllFromRenderQueue(["playerWalk", "playerStopWalk"]);
  
        // Hide current frame
        state.currentSprite.visible = false;
  
        // Add next frame
        state.currentSpriteKey = nextFrameKey;
        state.currentSprite = state.sprites[nextFrameKey];
        state.sprites[nextFrameKey].visible = true;
      },
      repeat: true,
      stack: false,
      payload: [],
      maxTime: 80,
    }),
    npcStopWalk: createRenderAction({
      id: "npcStopWalk",
      func: () => {
        const keyPartial = state.currentSpriteKey.replace(
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
          state.currentSprite.visible = false;

          // Add next frame
          state.currentSpriteKey = end;
          state.currentSprite = state.sprites[end];
          state.sprites[end].visible = true;
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

export default Npc;
