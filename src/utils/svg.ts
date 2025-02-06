import * as THREE from "three";
// @ts-ignore
import { SVGLoader } from "three/addons/loaders/SVGLoader";
import { forIncrement } from "./loops";
import { SpriteSheet } from "../types";
import { arrayToObject } from "./arrays";

export const loadSvg = (
  imageUrl: string,
  callback: (svgGroup: THREE.Group) => void
) => {
  const svgLoader = new SVGLoader();

  svgLoader.load(
    imageUrl,
    (data: any) => {
      const paths = data.paths;
      const group = new THREE.Group();

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];

        const material = new THREE.MeshBasicMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false,
        });

        const shapes = SVGLoader.createShapes(path);

        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j];
          const geometry = new THREE.ShapeGeometry(shape);
          geometry.applyMatrix4(new THREE.Matrix4().makeScale(1, -1, 1));
          const mesh = new THREE.Mesh(geometry, material);

          group.add(mesh);
        }
      }

      callback(group);
    },
    // called when loading is in progresses
    function (xhr: any) {},
    // called when loading has errors
    function (error: any) {}
  );
};

export const loadSvgSheet = async (
  imageUrl: string,
  sheetWidth: number,
  sheetHeight: number,
  spriteWidth: number,
  spriteHeight: number,
  shouldCollapse = true,
  callback: (svgGroup: THREE.Group[][]) => void
): Promise<any> => {
  let result = undefined;
  const svgLoader = new SVGLoader();

  await svgLoader.load(
    imageUrl,
    (data: any) => {
      const paths = data.paths;
      const group = new THREE.Group();
      const spriteCountHorizontal = Math.floor(sheetWidth / spriteWidth);
      const spriteCountVertical = Math.floor(sheetHeight / spriteHeight);

      // Create a parent group for each sprite in the sheet
      const sprites = forIncrement((i, acc: any[][] = []) => {

        const row = forIncrement((j, accRow: any[] = []) => {  
          return [...accRow, undefined];
        }, spriteCountHorizontal);

        return [...acc, row];
      }, spriteCountVertical);

      // Draw sprites to groups
      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const { x, y } = path.currentPath.currentPoint;

        const spriteIndexX = Math.floor(x / spriteWidth);
        const spriteIndexY = Math.floor(y / spriteHeight);

        const spriteOffsetX = spriteWidth * spriteIndexX;
        const spriteOffsetY = spriteHeight * spriteIndexY;

        const material = new THREE.MeshBasicMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false,
        });

        const shapes = SVGLoader.createShapes(path);

        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j];

          // Collapse sprite spacing, make then render on top of each other
          if(shouldCollapse) {
            shape.curves.forEach((curve: any) => {
              curve.v1.x -= spriteOffsetX;
              curve.v1.y -= spriteOffsetY;
              curve.v2.x  -= spriteOffsetX;
              curve.v2.y  -= spriteOffsetY;
            });
          }

          const geometry = new THREE.ShapeGeometry(shape);

          // Flip svg which will render upside down
          geometry.applyMatrix4(new THREE.Matrix4().makeScale(1, -1, 1));

          const mesh = new THREE.Mesh(geometry, material);

          mesh.scale.set(0.001, 0.001, 0.001);

          // If group is undefinded, define it
          if(sprites[spriteIndexY][spriteIndexX] === undefined) sprites[spriteIndexY][spriteIndexX] = new THREE.Group();

          // Add svg shape to sprite group
          sprites[spriteIndexY][spriteIndexX].add(mesh);
        }
      }
      result = callback(sprites);
    },
    // called when loading is in progresses
    function (xhr: any) {},
    // called when loading has errors
    function (error: any) {}
  );

  return result;
};

export const flattenSpriteSheet = (spriteSheet: SpriteSheet) => spriteSheet.flat().filter((sprite) => sprite !== undefined);

export const initialiseSprites = (spriteSheet: SpriteSheet, keys: string[], keyDefault: string) => {
  const spriteGroup = new THREE.Group();

  const spritesArray = flattenSpriteSheet(spriteSheet);
  const spritesObj = arrayToObject(keys, spritesArray);

  // Add sprites to single parent group
  spritesArray.forEach((sprite) => {
    spriteGroup.add(sprite);
  });

  // Initialise the player as default sprite
  spritesArray.forEach((sprite, i) => {
    if (keys[i] !== keyDefault) sprite.visible = false;
  });

  return { spritesArray, spritesObj };
}
