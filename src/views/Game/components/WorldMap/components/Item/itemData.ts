import bucketSpriteSheet from "../../../../../../assets/sprites/Items/bucket.svg";
import houseLightSpriteSheet from "../../../../../../assets/sprites/Items/house_light.svg";
import treeSpriteSheet from "../../../../../../assets/sprites/Items/tree_1.svg";
import bedHorizontalSpriteSheet from "../../../../../../assets/sprites/Items/bed_horizontal.svg";
import { ItemData } from "./types";

export const bucketData: ItemData = {
  size: 0.7,
  spriteSheet: {
    image: bucketSpriteSheet,
    spriteWidth: 14,
    spriteHeight: 14,
    sheetWidth: 42,
    sheetHeight: 14,
    defaultSprite: "water1",
    defaultAnimation: "water",
    sheetMap: [["water1", "water2", "water3"]],
    animationMap: {
      water: {
        frames: ["water1", "water2", "water3"],
        fps: 3,
        loop: true,
        end: undefined,
      },
    },
  },
  onInteract: () => {
    alert("DON'T TOUCH THE BUCKET");
  },
};

export const houseLightData: ItemData = {
  size: 5,
  spriteSheet: {
    image: houseLightSpriteSheet,
    spriteWidth: 97,
    spriteHeight: 65,
    sheetWidth: 97,
    sheetHeight: 65,
    defaultSprite: "water1",
    defaultAnimation: "water",
    sheetMap: [["water1"]],
    animationMap: {
      water: {
        frames: ["water1"],
        fps: 1,
        loop: false,
        end: undefined
      },
    },
  },
  onInteract: () => {
    alert("DON'T TOUCH THE HOUSE");
  },
};

export const treeData: ItemData = {
  size: 4,
  spriteSheet: {
    image: treeSpriteSheet,
    spriteWidth: 32,
    spriteHeight: 45,
    sheetWidth: 32,
    sheetHeight: 45,
    defaultSprite: "tree",
    defaultAnimation: "tree",
    sheetMap: [["tree"]],
    animationMap: {
      tree: {
        frames: ["tree"],
        fps: 1,
        loop: false
      },
    },
  },
  onInteract: () => {
    alert("DON'T TOUCH THE TREE");
  },
};

export const bedHorizontalData: ItemData = {
  size: 2,
  spriteSheet: {
    image: bedHorizontalSpriteSheet,
    spriteWidth: 49,
    spriteHeight: 49,
    sheetWidth: 28,
    sheetHeight: 28,
    defaultSprite: "bedHoriz",
    defaultAnimation: "bedHoriz",
    sheetMap: [["bedHoriz"]],
    animationMap: {
      bedHoriz: {
        frames: ["bedHoriz"],
        fps: 1,
        loop: false
      },
    },
  },
  onInteract: () => {
    alert("DON'T TOUCH THE BED");
  },
};
