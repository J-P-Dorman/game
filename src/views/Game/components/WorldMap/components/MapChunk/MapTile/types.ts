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
  align: Anchor;
};

export type Texture = { color: string; images?: string[]; speed?: number };

export type Tile = { id: string; texture: Texture; item: Item };

export type Tile2 = {
  id: string;
  texture: Texture;
  item: Item;
  threeGeometry: THREE.PlaneGeometry;
  threeTexture: THREE.Texture;
  threeMesh: THREE.Mesh;
};
