import THREE from "three";
import { ChunkData, MapData } from "../../../../types";
import MapChunk from "./components/MapChunk/MapChunk";
import {
  createRenderAction,
  pushToRenderQueue,
} from "../GameLoops/RenderLoop/utils";

interface Props {
  scene: THREE.Scene;
  mapData: MapData;
}

const WorldMap = () => {
  const loadedChunks: any[] = [];

  const load = ({ scene, mapData }: Props) => {
    const rows: any = [];

    Object.values(mapData).forEach((chunkData: ChunkData) => {
      const mapChunk = MapChunk();
      mapChunk.load(scene, chunkData);
      loadedChunks.push(mapChunk);
    });

    return [rows];
  };

  const animate = () => {
    pushToRenderQueue(
      createRenderAction({
        id: "renderMapChunk",
        func: ({ action, actionQueue }) => {
          loadedChunks.forEach((chunk) => {
            chunk.animate();
          });
        },
        repeat: true,
      })
    );
  };

  return { load, animate };
};

export default WorldMap;
