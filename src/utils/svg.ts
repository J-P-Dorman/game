import * as THREE from "three";
// @ts-ignore
import { SVGLoader } from "three/addons/loaders/SVGLoader";
import { forIncrement } from "./loops";
import { SpriteSheet } from "../types";
import { arrayToObject } from "./arrays";
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

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
          side: THREE.FrontSide,
          // depthWrite: false,
          // combine: THREE.AddOperation,
          // reflectivity: 0,
          // refractionRatio: 0
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

export const loadSvgSheet = (
  imageUrl: string,
  sheetWidth: number,
  sheetHeight: number,
  spriteWidth: number,
  spriteHeight: number,
  shouldCollapse = true,
  callback: (svgGroup: any[][]) => void
): Promise<any> => new Promise((resolve, reject) => {
  const sprites: Array<Array<Record<
    string, {color: any, geometries: THREE.BufferGeometry[]}
  >>> = [];

  const onSuccess = (data: {paths: any}) => {
    const { paths } = data;
  
    // Loop through the SVG paths
    for(let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const { x, y } = path.currentPath.currentPoint;
      const { color } = path;

      const spriteIndexX = Math.floor(x / spriteWidth);
      const spriteIndexY = Math.floor(y / spriteHeight);
      const spriteOffsetX = spriteWidth * spriteIndexX;
      const spriteOffsetY = spriteHeight * spriteIndexY;

      // Create THREE shape data from SVG path
      const shapes = SVGLoader.createShapes(path);

      // Loop through the shapes in the current path
      const geometries = shapes.map((shape: any) => {

        // Collapse sprite spacing, make them render on top of each other
        if(shouldCollapse) shape.curves.forEach((curve: any) => {
          curve.v1.x -= spriteOffsetX;
          curve.v1.y -= spriteOffsetY;
          curve.v2.x -= spriteOffsetX;
          curve.v2.y -= spriteOffsetY;
        });

        const geometry = new THREE.ShapeGeometry(shape, 0);

        return geometry;
      });

      const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);

      // Flip svg which will otherwise render upside down
      mergedGeometry.applyMatrix4(new THREE.Matrix4().makeScale(1, -1, 1));
 
      const colorKey = JSON.stringify(color);
      if(!sprites[spriteIndexY]) sprites[spriteIndexY] = [];
      if(!sprites[spriteIndexY][spriteIndexX]) sprites[spriteIndexY][spriteIndexX] = {};
      if(!sprites[spriteIndexY][spriteIndexX][colorKey]) sprites[spriteIndexY][spriteIndexX][colorKey] = {color, geometries: []};
      sprites[spriteIndexY][spriteIndexX][colorKey].geometries.push(mergedGeometry);
    }

    const spritesMerged = sprites.map((row) => {
      return row.map((colours) => {
        return Object.values(colours).reduce((acc, {color, geometries}) => {
          const geometry = BufferGeometryUtils.mergeGeometries(geometries);
          const material = new THREE.MeshBasicMaterial({
            color: color,
            side: THREE.DoubleSide,
            depthWrite: false,
            combine: THREE.AddOperation,
            reflectivity: 0,
            refractionRatio: 0
          });
          const mesh = new THREE.Mesh(geometry, material);

          acc.add(mesh);
          return acc;
        }, new THREE.Group())
      })
    })

    const result = callback(spritesMerged);
    resolve(result);
  }

  const onProgress = () => {}

  const onFail = () => {
    console.error(`Error loading svg: ${imageUrl}`);
    reject();
  }

  const svgLoader = new SVGLoader();
  svgLoader.load(imageUrl, onSuccess, onProgress, onFail);
});

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
