import { CreatureData } from "../../types";
import spriteSheet from "../../assets/sprites/creatures/player/player.svg";

export const playerData = {
  id: "player",
  size: 1.5,
  spriteSheet: {
    image: spriteSheet,
    spriteWidth: 20,
    spriteHeight: 30,
    sheetWidth: 160,
    sheetHeight: 510,
    defaultSprite: "turnDown",
    // The coordinates for each sprite on the sheet
    // Each array is a row, each string is the id of the image in that column
    sheetMap: [
      [
        "turnDown",
        "turnUp",
        "turnLeft",
        "turnRight",
        "turnLeftDown",
        "turnLeftUp",
        "turnRightDown",
        "turnRightUp",
      ],
      ["walkDown", "walkDown2"],
      ["walkUp", "walkUp2"],
      ["walkLeft", "walkLeft2"],
      ["walkRight", "walkRight2"],
      ["walkLeftDown", "walkLeftDown2"],
      ["walkLeftUp", "walkLeftUp2"],
      ["walkRightDown", "walkRightDown2"],
      ["walkRightUp", "walkRightUp2"],
      ["runDown", "runDown2"],
      ["runUp", "runUp2"],
      ["runLeft", "runLeft2"],
      ["runRight", "runRight2"],
      ["runLeftDown", "runLeftDown2"],
      ["runLeftUp", "runLeftUp2"],
      ["runRightDown", "runRightDown2"],
      ["runRightUp", "runRightUp2"],
    ],
    // The logic of how the sprites connect when animating
    animationMap: {
      walkDown: {
        frames: ["walkDown", "walkDown2"],
        end: "turnDown",
      },
      walkUp: {
        frames: ["walkUp", "walkUp2"],
        end: "turnUp",
      },
      walkLeft: {
        frames: ["walkLeft", "walkLeft2"],
        end: "turnLeft",
      },
      walkRight: {
        frames: ["walkRight", "walkRight2"],
        end: "turnRight",
      },
      walkLeftDown: {
        frames: ["walkLeftDown", "walkLeftDown2"],
        end: "turnLeftDown",
      },
      walkLeftUp: {
        frames: ["walkLeftUp", "walkLeftUp2"],
        end: "turnLeftUp",
      },
      walkRightDown: {
        frames: ["walkRightDown", "walkRightDown2"],
        end: "turnRightDown",
      },
      walkRightUp: {
        frames: ["walkRightUp", "walkRightUp2"],
        end: "turnRightUp",
      },
      runDown: {
        frames: ["runDown", "runDown2"],
        end: "turnDown",
      },
      runUp: {
        frames: ["runUp", "runUp2"],
        end: "turnUp",
      },
      runLeft: {
        frames: ["runLeft", "runLeft2"],
        end: "turnLeft",
      },
      runRight: {
        frames: ["runRight", "runRight2"],
        end: "turnRight",
      },
      runLeftDown: {
        frames: ["runLeftDown", "runLeftDown2"],
        end: "turnLeftDown",
      },
      runLeftUp: {
        frames: ["runLeftUp", "runLeftUp2"],
        end: "turnLeftUp",
      },
      runRightDown: {
        frames: ["runRightDown", "runRightDown2"],
        end: "turnRightDown",
      },
      runRightUp: {
        frames: ["runRightUp", "runRightUp2"],
        end: "turnRightUp",
      },
    },
  },
};
