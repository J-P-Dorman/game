import {
  createRenderAction,
  pushToRenderQueue,
} from "../../../GameLoops/RenderLoop/utils";

export const renderChunk = (chunkData: any) => {
  pushToRenderQueue(
    createRenderAction({
      id: "renderMapChunk",
      func: ({ action, actionQueue }) => {
        console.log("chunkData: ", chunkData);
        console.log("action: ", action);
        console.log("actionQueue: ", actionQueue);
      },
    })
  );
};
