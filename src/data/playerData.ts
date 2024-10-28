// In a real game, this would be supplied as JSON rather than hard coded
// Since it's hard coded, we might as well use constants to save on typo bugs
const turnDown = "turnDown";
const turnUp = "turnUp";
const turnLeft = "turnLeft";
const turnRight = "turnRight";
const turnLeftDown = "turnLeftDown";
const turnLeftUp = "turnLeftUp";
const turnRightDown = "turnRightDown";
const turnRightUp = "turnRightUp";

const walkDown = "walkDown";
const walkDown2 = "walkDown2";
const walkUp = "walkUp";
const walkUp2 = "walkUp2";
const walkLeft = "walkLeft";
const walkLeft2 = "walkLeft2";
const walkRight = "walkRight";
const walkRight2 = "walkRight2";
const walkLeftDown = "walkLeftDown";
const walkLeftDown2 = "walkLeftDown2";
const walkLeftUp = "walkLeftUp";
const walkLeftUp2 = "walkLeftUp2";
const walkRightDown = "walkRightDown";
const walkRightDown2 = "walkRightDown2";
const walkRightUp = "walkRightUp";
const walkRightUp2 = "walkRightUp2";

const runDown = "runDown";
const runDown2 = "runDown2";
const runUp = "runUp";
const runUp2 = "runUp2";
const runLeft = "runLeft";
const runLeft2 = "runLeft2";
const runRight = "runRight";
const runRight2 = "runRight2";
const runLeftDown = "runLeftDown";
const runLeftDown2 = "runLeftDown2";
const runLeftUp = "runLeftUp";
const runLeftUp2 = "runLeftUp2";
const runRightDown = "runRightDown";
const runRightDown2 = "runRightDown2";
const runRightUp = "runRightUp";
const runRightUp2 = "runRightUp2";

// Sheet map gives the coordinates for each sprite on the sheet
// Each array is a row, each string is the id of the image in that column
export const sheetMap = [
  [
    turnDown,
    turnUp,
    turnLeft,
    turnRight,
    turnLeftDown,
    turnLeftUp,
    turnRightDown,
    turnRightUp,
  ],
  [walkDown, walkDown2],
  [walkUp, walkUp2],
  [walkLeft, walkLeft2],
  [walkRight, walkRight2],
  [walkLeftDown, walkLeftDown2],
  [walkLeftUp, walkLeftUp2],
  [walkRightDown, walkRightDown2],
  [walkRightUp, walkRightUp2],
  [runDown, runDown2],
  [runUp, runUp2],
  [runLeft, runLeft2],
  [runRight, runRight2],
  [runLeftDown, runLeftDown2],
  [runLeftUp, runLeftUp2],
  [runRightDown, runRightDown2],
  [runRightUp, runRightUp2],
];

// Animation map is the logic of how the sprites connect when animating
export const animationMap = {
  walkDown: {
    frames: [walkDown, walkDown2],
    end: turnDown,
  },
  walkUp: {
    frames: [walkUp, walkUp2],
    end: turnUp,
  },
  walkLeft: {
    frames: [walkLeft, walkLeft2],
    end: turnLeft,
  },
  walkRight: {
    frames: [walkRight, walkRight2],
    end: turnRight,
  },
  walkLeftDown: {
    frames: [walkLeftDown, walkLeftDown2],
    end: turnLeftDown,
  },
  walkLeftUp: {
    frames: [walkLeftUp, walkLeftUp2],
    end: turnLeftUp,
  },
  walkRightDown: {
    frames: [walkRightDown, walkRightDown2],
    end: turnRightDown,
  },
  walkRightUp: {
    frames: [walkRightUp, walkRightUp2],
    end: turnRightUp,
  },
  runDown: {
    frames: [runDown, runDown2],
    end: turnDown,
  },
  runUp: {
    frames: [runUp, runUp2],
    end: turnUp,
  },
  runLeft: {
    frames: [runLeft, runLeft2],
    end: turnLeft,
  },
  runRight: {
    frames: [runRight, runRight2],
    end: turnRight,
  },
  runLeftDown: {
    frames: [runLeftDown, runLeftDown2],
    end: turnLeftDown,
  },
  runLeftUp: {
    frames: [runLeftUp, runLeftUp2],
    end: turnLeftUp,
  },
  runRightDown: {
    frames: [runRightDown, runRightDown2],
    end: turnRightDown,
  },
  runRightUp: {
    frames: [runRightUp, runRightUp2],
    end: turnRightUp,
  }
};
