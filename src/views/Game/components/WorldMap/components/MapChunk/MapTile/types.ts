import THREE from "three";

export type Anchor =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "center"
  | "bottomLeft"
  | "bottomRight"
  | "topLeft"
  | "topRight";

export type Item = {
  image?: string;
  width: number;
  height: number;
  anchor: Anchor;
};

export type Texture = {
  color: string;
  spriteSheet: {
    image: string;
    textureWidth: number;
    textureHeight: number;
    sheetWidth: number;
    sheetHeight: number;
    defaultTexture: string;
    defaultAnimation: string;
    sheetMap: string[][];
    animationMap: Record<
      string,
      {
        frames: string[];
        duration: number;
        repeat: boolean;
      }
    >;
  };
};

export type Tile = { id: string; texture: Texture; item: Item };

export type Tile2 = {
  id: string;
  texture: Texture;
  item: Item;
  threeGeometry: THREE.PlaneGeometry;
  threeTexture: THREE.Texture;
  threeMesh: THREE.Mesh;
};
