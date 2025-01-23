import THREE from "three";
import MapTile from "./MapTile/MapTile";
import { ChunkData, RowData, TileData } from "../../../../../../types";
import { chunkSize } from "../../../../../../constants";
import { loadRows, loadTiles, renderChunk } from "./helpers";

type State = {
  tileComponents: any[];
  chunkGroupFloor: THREE.Group;
  chunkGroupItems: THREE.Group;
  chunkGroup: THREE.Group;
};

const MapChunk = () => {
  const state: State = {
    tileComponents: [],
    chunkGroupFloor: new THREE.Group(),
    chunkGroupItems: new THREE.Group(),
    chunkGroup: new THREE.Group()
  };

  const load = (chunkData: ChunkData, chunkIndexX: number, chunkIndexY: number) => {
    const chunkStartX = chunkIndexX * chunkSize;
    const chunkStartY = chunkIndexY * chunkSize;
    
    // Turn row data into THREE groups
    const  { tileComponents, chunkGroupFloor, chunkGroupItems } = loadRows(chunkData, MapTile);

    // Save the data for future methods
    state.tileComponents = tileComponents;
    state.chunkGroupFloor = chunkGroupFloor;
    state.chunkGroupItems = chunkGroupItems;

    // Move items above the floor visually
    chunkGroupItems.position.set(0, 4, 0);

    // Compile the map chunk
    state.chunkGroup.add(chunkGroupFloor);
    state.chunkGroup.add(chunkGroupItems);

    // Set the top left corner of the chunk
    state.chunkGroup.position.set(chunkStartX, 0, chunkStartY);
  
    // Return final chunk for map to initialise with
    return state.chunkGroup;
  };

  const animate = () => {
    state.tileComponents.forEach((tile: any) => {
      tile.animate();
    });
  };

  return { load, animate };
};

export default MapChunk;
