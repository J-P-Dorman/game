import THREE from "three";
import { Item, Tile, Tile2 } from "./types";
import {
  pushToRenderQueue,
  createRenderAction,
} from "../../../../GameLoops/RenderLoop/utils";
import { TileData } from "../../../../../../../types";
import { createLogicAction } from "../../../../GameLoops/LogicLoop/utils";

type State = {
  data: Tile2;
  frameIndex: 0;
};

const MapTile = () => {
  const state: State = {
    data: undefined,
    frameIndex: 0
  };

  const getOffset = (textureWidth: number, sheetWidth: number) => {
    const frameCount = sheetWidth / textureWidth;
    return 1 / frameCount;
  };

  const loadItem = ({image, width, height, anchor}: Item) => {
    const threeTexture = new THREE.TextureLoader().load(image);
    threeTexture.colorSpace = THREE.SRGBColorSpace;

    // Use 0.002 to zoom in a little to stop frame bleeding
    // TODO: I think this can be better handled by changing image size
    // threeTexture.repeat.set(1, 1);
    const itemMaterial = new THREE.MeshBasicMaterial({
      map: threeTexture,
      transparent: true
    });

    const itemGeometry = new THREE.PlaneGeometry(width ?? 1, height ?? 1);
    const itemMesh = new THREE.Mesh(itemGeometry, itemMaterial);
    itemMesh.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);

    return itemMesh;
  }

  const load = (tile: Tile) => {
    const { id, texture, item } = tile;
    const { color, spriteSheet } = texture;

    const [threeTexture, threeMaterial] = ((): any => {  
      if(!spriteSheet) return [undefined, new THREE.MeshBasicMaterial({ color })];

      const {
        image,
        textureWidth,
        textureHeight,
        sheetWidth,
        sheetHeight,
        defaultTexture,
        defaultAnimation,
        sheetMap,
        animationMap,
      } = spriteSheet;
      const offset = getOffset(textureWidth, sheetWidth);

      const threeTexture = new THREE.TextureLoader().load(image);
      threeTexture.colorSpace = THREE.SRGBColorSpace;

      // Use 0.002 to zoom in a little to stop frame bleeding
      // TODO: I think this can be better handled by changing image size
      threeTexture.repeat.set(offset - 0.002, 1);

      const threeMaterial = new THREE.MeshBasicMaterial({
        map: threeTexture,
      });

      return [threeTexture, threeMaterial];
    })();
    
    const itemMesh = item ? loadItem(item) : undefined;

    const threeGeometry = new THREE.PlaneGeometry(1, 1);
    const threeMesh = new THREE.Mesh(threeGeometry, threeMaterial);
    threeMesh.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);

    state.data = { ...tile, threeGeometry, threeTexture, threeMesh };

    return [threeMesh, itemMesh];
  };

  // TODO: Optimise this by not animating single image tiles
  const animate = () => {
    const { texture, item, threeGeometry, threeTexture } = state.data;
    const { color, spriteSheet } = texture;
    
    if (!spriteSheet) return;

    const {
      image,
      textureWidth,
      textureHeight,
      sheetWidth,
      sheetHeight,
      defaultTexture,
      defaultAnimation,
      sheetMap,
      animationMap,
    } = spriteSheet;
    const offset = getOffset(textureWidth, sheetWidth);

    // Have to minus one frame for zero indexing
    const maxWidth = sheetWidth - textureWidth;
    const isSingleFrame = textureWidth >= maxWidth;

    if(!isSingleFrame) {
      state.frameIndex += 1;

      if (state.frameIndex * textureWidth >= maxWidth) {
        state.frameIndex = 0;
      }
  
      // Move half of 0.002 to stop frame bleeding
      threeTexture.offset.set(offset * state.frameIndex + 0.001, 0);
    }
  };

  return { load, animate };
};

export default MapTile;
