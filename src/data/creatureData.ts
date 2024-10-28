import { CreatureData } from "../types";
import imgUp from "../assets/sprites/creatures/player/turn/up.svg";
import imgDown from "../assets/sprites/creatures/player/turn/down.svg";
import imgLeft from "../assets/sprites/creatures/player/turn/left.svg";
import imgRight from "../assets/sprites/creatures/player/turn/right.svg";
import imgDownLeft from "../assets/sprites/creatures/player/turn/down_left.svg";
import imgUpLeft from "../assets/sprites/creatures/player/turn/up_left.svg";
import imgDownRight from "../assets/sprites/creatures/player/turn/down_right.svg";
import imgUpRight from "../assets/sprites/creatures/player/turn/up_right.svg";
import imgUpWalk1 from "../assets/sprites/creatures/player/walk/up/up_walk_1.svg";
import imgUpWalk2 from "../assets/sprites/creatures/player/walk/up/up_walk_2.svg";
import imgDownWalk1 from "../assets/sprites/creatures/player/walk/down/down_walk_1.svg";
import imgDownWalk2 from "../assets/sprites/creatures/player/walk/down/down_walk_2.svg";
import imgLeftWalk1 from "../assets/sprites/creatures/player/walk/left/left_walk_1.svg";
import imgLeftWalk2 from "../assets/sprites/creatures/player/walk/left/left_walk_2.svg";
import imgRightWalk1 from "../assets/sprites/creatures/player/walk/right/right_walk_1.svg";
import imgRightWalk2 from "../assets/sprites/creatures/player/walk/right/right_walk_2.svg";
import imgUpLeftWalk1 from "../assets/sprites/creatures/player/walk/up_left/up_left_walk_1.svg";
import imgUpLeftWalk2 from "../assets/sprites/creatures/player/walk/up_left/up_left_walk_2.svg";
import imgDownLeftWalk1 from "../assets/sprites/creatures/player/walk/down_left/down_left_walk_1.svg";
import imgDownLeftWalk2 from "../assets/sprites/creatures/player/walk/down_left/down_left_walk_2.svg";
import imgUpRightWalk1 from "../assets/sprites/creatures/player/walk/up_right/up_right_walk_1.svg";
import imgUpRightWalk2 from "../assets/sprites/creatures/player/walk/up_right/up_right_walk_2.svg";
import imgDownRightWalk1 from "../assets/sprites/creatures/player/walk/down_right/down_right_walk_1.svg";
import imgDownRightWalk2 from "../assets/sprites/creatures/player/walk/down_right/down_right_walk_2.svg";

export const playerData: CreatureData = {
  id: "player",
  defaultState: "turnDown",
  states: {
    turnUp: {
      image: imgUp,
      onShow: () => {},
    },
    turnDown: {
      image: imgDown,
      onShow: () => {},
    },
    turnLeft: {
      image: imgLeft,
      onShow: () => {},
    },
    turnRight: {
      image: imgRight,
      onShow: () => {},
    },
    turnDownLeft: {
      image: imgDownLeft,
      onShow: () => {},
    },
    turnUpLeft: {
      image: imgUpLeft,
      onShow: () => {},
    },
    turnDownRight: {
      image: imgDownRight,
      onShow: () => {},
    },
    turnUpRight: {
      image: imgUpRight,
      onShow: () => {},
    },
    walkUp1: {
      image: imgUpWalk1,
      onShow: () => {},
    },
    walkUp2: {
      image: imgUpWalk2,
      onShow: () => {},
    },
    walkDown1: {
      image: imgDownWalk1,
      onShow: () => {},
    },
    walkDown2: {
      image: imgDownWalk2,
      onShow: () => {},
    },
    walkLeft1: {
      image: imgLeftWalk1,
      onShow: () => {},
    },
    walkLeft2: {
      image: imgLeftWalk2,
      onShow: () => {},
    },
    walkRight1: {
      image: imgRightWalk1,
      onShow: () => {},
    },
    walkRight2: {
      image: imgRightWalk2,
      onShow: () => {},
    },
    walkUpRight1: {
      image: imgUpRightWalk1,
      onShow: () => {},
    },
    walkUpRight2: {
      image: imgUpRightWalk2,
      onShow: () => {},
    },
    walkDownRight1: {
      image: imgDownRightWalk1,
      onShow: () => {},
    },
    walkDownRight2: {
      image: imgDownRightWalk2,
      onShow: () => {},
    },
    walkUpLeft1: {
      image: imgUpLeftWalk1,
      onShow: () => {},
    },
    walkUpLeft2: {
      image: imgUpLeftWalk2,
      onShow: () => {},
    },
    walkDownLeft1: {
      image: imgDownLeftWalk1,
      onShow: () => {},
    },
    walkDownLeft2: {
      image: imgDownLeftWalk2,
      onShow: () => {},
    },
  },
};
