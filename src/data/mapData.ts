import treeImg from "../assets/sprites/scenery/tree.png";
import { Item, Texture, CellData, ChunkData, MapData } from "../types";
import imageGrass1 from '../assets/sprites/scenery/grass_1.png';
import imageShoreUp1 from '../assets/sprites/scenery/shore/up/shore_up_1.svg';
import imageShoreUp2 from '../assets/sprites/scenery/shore/up/shore_up_2.svg';
import imageShoreUp3 from '../assets/sprites/scenery/shore/up/shore_up_3.svg';
import imageShoreUp4 from '../assets/sprites/scenery/shore/up/shore_up_4.svg';
import imageShoreUp5 from '../assets/sprites/scenery/shore/up/shore_up_5.svg';
import imageShoreUp6 from '../assets/sprites/scenery/shore/up/shore_up_6.svg';
import imageShoreUp7 from '../assets/sprites/scenery/shore/up/shore_up_7.svg';
import imageShoreUp8 from '../assets/sprites/scenery/shore/up/shore_up_8.svg';
import imageShoreUp9 from '../assets/sprites/scenery/shore/up/shore_up_9.svg';
import imageShoreUp10 from '../assets/sprites/scenery/shore/up/shore_up_10.svg';
import imageShoreUp11 from '../assets/sprites/scenery/shore/up/shore_up_11.svg';
import imageShoreUp12 from '../assets/sprites/scenery/shore/up/shore_up_12.svg';
import imageShoreUp13 from '../assets/sprites/scenery/shore/up/shore_up_13.svg';
import imageShoreUp14 from '../assets/sprites/scenery/shore/up/shore_up_14.svg';
import imageShoreUp15 from '../assets/sprites/scenery/shore/up/shore_up_15.svg';
import imageShoreUp16 from '../assets/sprites/scenery/shore/up/shore_up_16.svg';
import imageShoreUp17 from '../assets/sprites/scenery/shore/up/shore_up_17.svg';
import imageShoreUp18 from '../assets/sprites/scenery/shore/up/shore_up_18.svg';
import imageShoreUp19 from '../assets/sprites/scenery/shore/up/shore_up_19.svg';
import imageShoreUp20 from '../assets/sprites/scenery/shore/up/shore_up_20.svg';
import imageShoreUp21 from '../assets/sprites/scenery/shore/up/shore_up_21.svg';
import imageShoreUp22 from '../assets/sprites/scenery/shore/up/shore_up_22.svg';
import imageShoreUp23 from '../assets/sprites/scenery/shore/up/shore_up_23.svg';
import imageShoreUp24 from '../assets/sprites/scenery/shore/up/shore_up_24.svg';
import imageShoreUp25 from '../assets/sprites/scenery/shore/up/shore_up_25.svg';
import imageShoreUp26 from '../assets/sprites/scenery/shore/up/shore_up_26.svg';
import imageShoreUp27 from '../assets/sprites/scenery/shore/up/shore_up_27.svg';
import imageShoreUp28 from '../assets/sprites/scenery/shore/up/shore_up_28.svg';
import imageShoreUp29 from '../assets/sprites/scenery/shore/up/shore_up_29.svg';
import imageShoreUp30 from '../assets/sprites/scenery/shore/up/shore_up_30.svg';
import imageShoreUp31 from '../assets/sprites/scenery/shore/up/shore_up_31.svg';
import imageShoreUpLeft1 from '../assets/sprites/scenery/shore/up_left/shore_up_left_1.svg';
import imageShoreUpLeft2 from '../assets/sprites/scenery/shore/up_left/shore_up_left_2.svg';
import imageShoreUpLeft3 from '../assets/sprites/scenery/shore/up_left/shore_up_left_3.svg';
import imageShoreUpLeft4 from '../assets/sprites/scenery/shore/up_left/shore_up_left_4.svg';
import imageShoreUpLeft5 from '../assets/sprites/scenery/shore/up_left/shore_up_left_5.svg';
import imageShoreUpLeft6 from '../assets/sprites/scenery/shore/up_left/shore_up_left_6.svg';
import imageShoreUpLeft7 from '../assets/sprites/scenery/shore/up_left/shore_up_left_7.svg';
import imageShoreUpLeft8 from '../assets/sprites/scenery/shore/up_left/shore_up_left_8.svg';
import imageShoreUpLeft9 from '../assets/sprites/scenery/shore/up_left/shore_up_left_9.svg';
import imageShoreUpLeft10 from '../assets/sprites/scenery/shore/up_left/shore_up_left_10.svg';
import imageShoreUpLeft11 from '../assets/sprites/scenery/shore/up_left/shore_up_left_11.svg';
import imageShoreUpLeft12 from '../assets/sprites/scenery/shore/up_left/shore_up_left_12.svg';
import imageShoreUpLeft13 from '../assets/sprites/scenery/shore/up_left/shore_up_left_13.svg';
import imageShoreUpLeft14 from '../assets/sprites/scenery/shore/up_left/shore_up_left_14.svg';
import imageShoreUpLeft15 from '../assets/sprites/scenery/shore/up_left/shore_up_left_15.svg';
import imageShoreUpLeft16 from '../assets/sprites/scenery/shore/up_left/shore_up_left_16.svg';
import imageShoreUpLeft17 from '../assets/sprites/scenery/shore/up_left/shore_up_left_17.svg';
import imageShoreUpLeft18 from '../assets/sprites/scenery/shore/up_left/shore_up_left_18.svg';
import imageShoreUpLeft19 from '../assets/sprites/scenery/shore/up_left/shore_up_left_19.svg';
import imageShoreUpLeft20 from '../assets/sprites/scenery/shore/up_left/shore_up_left_20.svg';
import imageShoreUpLeft21 from '../assets/sprites/scenery/shore/up_left/shore_up_left_21.svg';
import imageShoreUpLeft22 from '../assets/sprites/scenery/shore/up_left/shore_up_left_22.svg';
import imageShoreUpLeft23 from '../assets/sprites/scenery/shore/up_left/shore_up_left_23.svg';
import imageShoreUpLeft24 from '../assets/sprites/scenery/shore/up_left/shore_up_left_24.svg';
import imageShoreUpLeft25 from '../assets/sprites/scenery/shore/up_left/shore_up_left_25.svg';
import imageShoreUpLeft26 from '../assets/sprites/scenery/shore/up_left/shore_up_left_26.svg';
import imageShoreUpLeft27 from '../assets/sprites/scenery/shore/up_left/shore_up_left_27.svg';
import imageShoreUpLeft28 from '../assets/sprites/scenery/shore/up_left/shore_up_left_28.svg';
import imageShoreUpLeft29 from '../assets/sprites/scenery/shore/up_left/shore_up_left_29.svg';
import imageShoreUpLeft30 from '../assets/sprites/scenery/shore/up_left/shore_up_left_30.svg';
import imageShoreUpLeft31 from '../assets/sprites/scenery/shore/up_left/shore_up_left_31.svg';

// Textures
// =================================================================
const textureSand: Texture = { color: "#dfd4a6", images: undefined };
const textureGrass: Texture = { color: "#8bb312", images: undefined };
const textureGrass1: Texture = { color: "#8bb312", images: [imageGrass1] };
const textureVoid: Texture = { color: "#111111", images: undefined };
const textureWater: Texture = { color: "#2d6cab", images: undefined };
export const textureShoreUp: Texture = {
  color: "rgb(107 143 247)",
  images: [
    imageShoreUp1,
    imageShoreUp2,
    imageShoreUp3,
    imageShoreUp4,
    imageShoreUp5,
    imageShoreUp6,
    imageShoreUp7,
    imageShoreUp8,
    imageShoreUp9,
    imageShoreUp10,
    imageShoreUp11,
    imageShoreUp12,
    imageShoreUp13,
    imageShoreUp14,
    imageShoreUp15,
    imageShoreUp16,
    imageShoreUp17,
    imageShoreUp18,
    imageShoreUp19,
    imageShoreUp20,
    imageShoreUp21,
    imageShoreUp22,
    imageShoreUp23,
    imageShoreUp24,
    imageShoreUp25,
    imageShoreUp26,
    imageShoreUp27,
    imageShoreUp28,
    imageShoreUp29,
    imageShoreUp30,
    imageShoreUp31,
    imageShoreUp30,
    imageShoreUp29,
    imageShoreUp28,
    imageShoreUp27,
    imageShoreUp26,
    imageShoreUp25,
    imageShoreUp24,
    imageShoreUp23,
    imageShoreUp22,
    imageShoreUp21,
    imageShoreUp20,
    imageShoreUp19,
    imageShoreUp18,
    imageShoreUp17,
    imageShoreUp16,
    imageShoreUp15,
    imageShoreUp14,
    imageShoreUp13,
    imageShoreUp12,
    imageShoreUp11,
    imageShoreUp10,
    imageShoreUp8,
    imageShoreUp7,
    imageShoreUp6,
    imageShoreUp5,
    imageShoreUp4,
    imageShoreUp3,
    imageShoreUp2
  ],
  speed: 500
};

export const textureShoreUpLeft: Texture = {
  color: "rgb(107 143 247)",
  images: [
    imageShoreUpLeft1,
    imageShoreUpLeft2,
    imageShoreUpLeft3,
    imageShoreUpLeft4,
    imageShoreUpLeft5,
    imageShoreUpLeft6,
    imageShoreUpLeft7,
    imageShoreUpLeft8,
    imageShoreUpLeft9,
    imageShoreUpLeft10,
    imageShoreUpLeft11,
    imageShoreUpLeft12,
    imageShoreUpLeft13,
    imageShoreUpLeft14,
    imageShoreUpLeft15,
    imageShoreUpLeft16,
    imageShoreUpLeft17,
    imageShoreUpLeft18,
    imageShoreUpLeft19,
    imageShoreUpLeft20,
    imageShoreUpLeft21,
    imageShoreUpLeft22,
    imageShoreUpLeft23,
    imageShoreUpLeft24,
    imageShoreUpLeft25,
    imageShoreUpLeft26,
    imageShoreUpLeft27,
    imageShoreUpLeft28,
    imageShoreUpLeft29,
    imageShoreUpLeft30,
    imageShoreUpLeft31,
    imageShoreUpLeft30,
    imageShoreUpLeft29,
    imageShoreUpLeft28,
    imageShoreUpLeft27,
    imageShoreUpLeft26,
    imageShoreUpLeft25,
    imageShoreUpLeft24,
    imageShoreUpLeft23,
    imageShoreUpLeft22,
    imageShoreUpLeft21,
    imageShoreUpLeft20,
    imageShoreUpLeft19,
    imageShoreUpLeft18,
    imageShoreUpLeft17,
    imageShoreUpLeft16,
    imageShoreUpLeft15,
    imageShoreUpLeft14,
    imageShoreUpLeft13,
    imageShoreUpLeft12,
    imageShoreUpLeft11,
    imageShoreUpLeft10,
    imageShoreUpLeft8,
    imageShoreUpLeft7,
    imageShoreUpLeft6,
    imageShoreUpLeft5,
    imageShoreUpLeft4,
    imageShoreUpLeft3,
    imageShoreUpLeft2
  ],
  speed: 500
};

// Items
// =================================================================
// const itemNone: Item = {
//   image: undefined,
//   width: 1,
//   height: 1,
//   anchor: "topLeft",
//   align: "center",
// };
const itemTree: Item = {
  image: treeImg,
  width: 2,
  height: 2,
  anchor: "topLeft",
  align: "center",
};

export const S: CellData = { id: "sand", texture: textureSand, item: undefined };
export const G: CellData = {
  id: "grass",
  texture: textureGrass,
  item: undefined,
};
export const G1: CellData = {
  id: "grass1",
  texture: textureGrass1,
  item: undefined,
};
export const V: CellData = { id: "void", texture: textureVoid, item: undefined };
export const W: CellData = {
  id: "water",
  texture: textureWater,
  item: undefined,
};
export const SHU: CellData = {
  id: "shoreUp",
  texture: textureShoreUp,
  item: undefined,
};
export const SHUL: CellData = {
  id: "shoreUpLeft",
  texture: textureShoreUpLeft,
  item: undefined,
};
export const GT: CellData = {
  id: "treeGrass",
  texture: textureGrass,
  item: itemTree,
};
export const H: CellData = {
  id: "grassHouse",
  texture: textureGrass1,
  item: itemTree,
};

const chunk1_1: ChunkData = [
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,GT,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,GT,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
];

const chunk2_1: ChunkData = chunk1_1;
const chunk3_1: ChunkData = chunk1_1;

const chunk1_2: ChunkData = [
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,S,S,S,S,S,S,S,S,S,S,S,G,G,G,G,G,G,G,G],
  [S,S,S,S,S,S,S,S,S,S,S,S,S,SHUL,SHU,SHU,SHU,SHU,SHU,SHU,S,S,S,S,S,S,S,S,S,S],
  [SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,W,W,W,W,W,W,W,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

const chunk2_2: ChunkData = [
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,GT,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,GT,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,GT,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G1,G1,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G1,G1,G1,G1,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,S,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],
  [G,G,G,G,G,G,G,G,S,G,S,S,G,G,G,S,S,S,G,G,G,G,G,G,G,S,G,G,G,G],
  [S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S],
  [S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,SHU,SHU],
  [SHU,SHU,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,SHU,W,W],
  [W,W,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

const chunk3_2: ChunkData = chunk1_2;

const chunk1_3: ChunkData = [
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

const chunk2_3: ChunkData = [
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

const chunk3_3: ChunkData = [
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];


export const mapStart: MapData = [
  chunk1_1,
  chunk2_1,
  chunk3_1,
  chunk1_2,
  chunk2_2,
  chunk3_2,
  chunk1_3,
  chunk2_3,
  chunk3_3,
];
