import bucketSpriteSheet from "../../../../../../assets/sprites/Items/bucket.svg";
import { ItemData } from "./types";

export const bucketData: ItemData = {
  width: 0.5,
  height: 0.5,
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
