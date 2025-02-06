import * as THREE from "three";
import { ChunkData, MapData } from "../../../../types";
import MapChunk from "./components/MapChunk/MapChunk";
import {
  createRenderAction,
  pushToRenderQueue,
  renderNow,
} from "../GameLoops/RenderLoop/utils";
import { createLogicAction } from "../GameLoops/LogicLoop/utils";

interface Props {
  scene: THREE.Scene;
  mapData: MapData;
}

type State = {
  mapData: MapData;
  chunkComponents: any[];
};

const WorldMap = () => {
  const state: State = {
    mapData:[],
    chunkComponents: []
  };

  const load = ({ scene, mapData }: Props) => {
    const rows: any = [];

    // Loop through each row of chunks in the map
    mapData.forEach((chunksData: ChunkData[], chunkIndexY: number) => {

      // Loop through each chunk in the row of chunks
      chunksData.forEach((chunkData: ChunkData, chunkIndexX: number) => {
      const mapChunk = MapChunk();
      const chunkGroup = mapChunk.load(chunkData, chunkIndexX, chunkIndexY);
      scene.add(chunkGroup);
      state.chunkComponents.push(mapChunk);
      });
    });

    return [rows];
  };

  const animate = () => {
    pushToRenderQueue(
      createRenderAction({
        id: "renderMapChunk",
        func: ({ action, actionQueue }) => {
          state.chunkComponents.forEach((mapChunk) => {
            mapChunk.animate();
          });
        },
        repeat: true,
      })
    );
  };

  // Actions
  // ===========================================================================
  const logicActions = {
    playerTurn: createLogicAction({
      id: "initMap",
      func: ({ action }) => {
        const [chunkIds] = action.payload;

        renderNow(renderActions.initMap);
      },
      stack: false,
      payload: ["down"],
    })
  };

  const renderActions = {
    initMap: createRenderAction({
      id: "initMap",
      func: () => {
     
      },
      repeat: false,
      stack: false,
      payload: [],
      maxTime: 0,
    }),
  };

  return { load, animate, logicActions, renderActions };
};

export default WorldMap;
