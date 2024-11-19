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
  const offset = 1 / 60; // Hacky but works for now

  console.log("offset: ", offset);

  const load = (tile: Tile) => {
    const { texture, item } = tile;
    const { color, images } = texture;

    const [threeTexture, threeMaterial] = (() => {
      if (images?.length) {
        const threeTexture = new THREE.TextureLoader().load(images[0]);
        threeTexture.colorSpace = THREE.SRGBColorSpace;
        threeTexture.repeat.set(offset, 1);
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

  const animate = () => {
    // console.log("tile: ", data);
    const { texture, item, threeGeometry, threeTexture } = data;
    const { color, images } = texture;
    if (!images?.length) return;
    // console.log("frameIndex: ", frameIndex);
    var img = new Image();

    frameIndex += 1;

    img.onload = function () {
      var width = img.width;

      if (frameIndex * 150 > width) {
        frameIndex = 0;
      }
    };

    img.src = images[0];

    threeTexture.offset.set(offset * frameIndex, 0);
  };

  return { load, animate };
};

export default MapTile;
