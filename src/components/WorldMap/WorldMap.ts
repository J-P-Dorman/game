import { MapData } from "../../types";
import MapChunk from "./components/MapChunk/MapChunk";

interface Props {
  mapData: MapData;
  gameWidth: number;
  gameHeight: number;
}

const WorldMap = ({
  mapData,
  gameWidth,
  gameHeight,
}: Props): HTMLDivElement => {
  const render = () => {
    const chunkContainerEl = document.createElement("div");
    chunkContainerEl.id = "chunk-container";

    mapData.forEach((chunkData, chunkIndex) => {
      MapChunk(chunkData, chunkIndex, gameWidth, gameHeight, chunkContainerEl);
    });

    return chunkContainerEl;
  };

  return render();
};

export default WorldMap;
