import { RowData, TileData } from "../../../../../../types";
import {
  createRenderAction,
  pushToRenderQueue,
} from "../../../GameLoops/RenderLoop/utils";
import THREE from "three";

type RowMutations = { rowGroupFloor: THREE.Group, rowGroupItems: THREE.Group, rowIndex: number };
type TileMutations = { tileMesh: any, itemMesh: any, rowGroupFloor: THREE.Group, rowGroupItems: THREE.Group, tileIndex: number };
type LoadRowsReturn = { tileComponents: any, chunkGroupFloor: THREE.Group, chunkGroupItems: THREE.Group };

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

/** 
 * Takes raw tile data and initialises them as components
 * @param rowData Raw data about a row of tiles
 * @param tileComponent A function component to generate the new tile
 * 
 * @returns
 * [rowTiles] An array of initialised tile components,
 * [rowGroupFloor] a THREE.js group for the floor,
 * [rowGrooupItems] a THREE.js group for the items
 * 
 */
export const loadTiles = (
  tilesData: TileData[],
  tileComponent: any,
  rowGroupFloor: THREE.Group,
  rowGroupItems: THREE.Group
) => {
  const rowTiles = tilesData.reduce((acc, tileData, tileIndex: number): any => {
  const newTile = tileComponent();
  const [tileMesh, itemMesh] = newTile.load(tileData);

    // Add floor tile to floor row
    tileMesh.position.set(tileIndex, 0, 0);
    rowGroupFloor.add(tileMesh);
  
    // Add item tile to item row
    // Not every floor tile has an item on top
    if(itemMesh) {
      itemMesh.position.set(tileIndex, 0, 0);
      rowGroupItems.add(itemMesh);
    }

    return [...acc, newTile]
  }, []);

  return { rowTiles, rowGroupFloor, rowGroupItems };
}



/** 
 * Takes arrays of tile data and converts them into THREE.js groups
 * Because THREE.JS is mutable, we can hide that ugliness inside this helper function
 * @param rowData Raw data about a row of tiles
 * @param tileComponent A function component to generate the new tile
 * 
 * @returns
 * [rowTiles] An array of initialised tile components,
 * [rowGroupFloor] a THREE.js group for the floor,
 * [rowGrooupItems] a THREE.js group for the items
 * 
 */
export const loadRows = (rowData: RowData[], TileComponent: any): LoadRowsReturn => {
  const chunkGroupFloor = new THREE.Group();
  const chunkGroupItems = new THREE.Group();

  const tileComponents = rowData.reduce(
    (acc, rowData: RowData, rowIndex: number) => {

      // Create each individual tile in the row
      const {rowTiles, rowGroupFloor, rowGroupItems } = loadTiles(
        rowData,
        TileComponent,
        new THREE.Group(), // rowGroupFloor
        new THREE.Group()  // rowGroupItems
      );

      // Stack the rows one below the other visually
      rowGroupFloor.position.set(0, 0, rowIndex);
      rowGroupItems.position.set(0, 0, rowIndex);

      // Add rows to map visually
      chunkGroupFloor.add(rowGroupFloor);
      chunkGroupItems.add(rowGroupItems);

      return [...acc, ...rowTiles];
    }, []
  );

  return { tileComponents, chunkGroupFloor, chunkGroupItems };
}