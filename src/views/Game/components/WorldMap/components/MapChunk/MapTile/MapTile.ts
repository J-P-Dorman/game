import THREE from "three";
import { Tile, Tile2 } from "./types";
import {
  pushToRenderQueue,
  createRenderAction,
} from "../../../../GameLoops/RenderLoop/utils";
import { TileData } from "../../../../../../../types";

const MapTile = () => {
  let data: Tile2 = undefined;
  let frameIndex = 0;

  const getOffset = (frameWidth: number, sheetWidth: number) => {
    const frameCount = sheetWidth / frameWidth;
    return 1 / frameCount;
  };

  const load = (tile: Tile) => {
    const { texture, item } = tile;
    const { color, spriteSheet } = texture;

    const [threeTexture, threeMaterial] = (() => {
      if (spriteSheet) {
        const { image, frameWidth, sheetWidth } = spriteSheet;
        const offset = getOffset(frameWidth, sheetWidth);
        const threeTexture = new THREE.TextureLoader().load(image);
        threeTexture.colorSpace = THREE.SRGBColorSpace;

        // Use 0.002 to zoom in a little to stop frame bleeding
        threeTexture.repeat.set(offset - 0.002, 1);

        const threeMaterial = new THREE.MeshBasicMaterial({
          map: threeTexture,
        });

        return [threeTexture, threeMaterial];
      }

      return [undefined, new THREE.MeshBasicMaterial({ color })];
    })();

    const threeGeometry = new THREE.PlaneGeometry(1, 1);
    const threeMesh = new THREE.Mesh(threeGeometry, threeMaterial);

    threeMesh.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);

    data = { ...tile, threeGeometry, threeTexture, threeMesh };

    return threeMesh;
  };

  // TODO: Optimise this by not offsetting single image tiles
  const animate = () => {
    const { texture, item, threeGeometry, threeTexture } = data;
    const { color, spriteSheet } = texture;
    if (!spriteSheet) return;
    const { frameWidth, sheetWidth } = spriteSheet;
    const offset = getOffset(frameWidth, sheetWidth);

    frameIndex += 1;

    // Have to minus one frame for zero indexing
    const maxWidth = sheetWidth - frameWidth;

    if (frameIndex * frameWidth >= maxWidth) {
      frameIndex = 0;
    }

    // Move half of 0.002 to stop frame bleeding
    threeTexture.offset.set(offset * frameIndex + 0.001, 0);
  };

  return { load, animate };
};

export default MapTile;
