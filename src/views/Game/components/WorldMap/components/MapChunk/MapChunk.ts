import THREE from "three";
import MapTile from "./MapTile/MapTile";
import { ChunkData, RowData, TileData } from "../../../../../../types";
import { chunkSize } from "../../../../../../constants";
import { renderChunk } from "./helpers";

const MapChunk = () => {
  let renderedRows: any[] = [];

  const load = (scene: THREE.Scene, chunkData: ChunkData) => {
    const { position, rows } = chunkData;
    const { x, z } = position;
    const mapChunk = new THREE.Group();

    mapChunk.position.set(x * chunkSize, 0, z * chunkSize);

    renderedRows = rows.map((row: RowData, rowIndex: number) => {
      const groupRow = new THREE.Group();
      const rowData = [];
      groupRow.position.set(0, 0, rowIndex);
      mapChunk.add(groupRow);

      const renderedTiles = row.map((tileData: TileData, tileIndex: number) => {
        const mapTile = MapTile();
        const tileMesh = mapTile.load(tileData);

        rowData.push(mapTile);
        tileMesh.position.set(tileIndex, 0, 0);
        groupRow.add(tileMesh);

        return mapTile;
      });

      renderedRows.push(groupRow);

      return renderedTiles;
    });

    scene.add(mapChunk);

    return { renderedRows };
  };

  const animate = () => {
    renderedRows.forEach((row: RowData) => {
      row.forEach((tile: any) => {
        tile.animate();
      });
    });
  };

  return { load, animate };
};

export default MapChunk;
