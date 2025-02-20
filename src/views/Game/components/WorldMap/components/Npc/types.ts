import * as THREE from "three";
import { CreatureData } from "../../../../../../types";

export type State = {
  spriteSheet: any;
  width: number;
  height: number;
  onInteract: () => void;
  currentSpriteKey: string;
  currentSprite: THREE.Group;
  spriteGroup: THREE.Group;
  spriteList: Record<string, THREE.Group>;
  position: { x: number; y: number };
  movement: {
    direction:
      | "left"
      | "right"
      | "up"
      | "down"
      | "downLeft"
      | "downRight"
      | "upLeft"
      | "upRight";
    path: { x: number; y: number }[];
    currentIndex: number;
    speed: number;
    loop: boolean;
  };
  // data?: CreatureData;
  // spriteGroup?: THREE.Group;
  // sprites: Record<string, THREE.Group>;
  // currentSpriteKey: string;
  // currentSprite?: THREE.Group;
  // isWalking: boolean;
  // isRunning: boolean;
  // position: { x: number, y: number },
  // direction: 'down' | 'up' | 'left' | 'right';
};

export type LoadArgs = {
  creatureData: CreatureData;
};

export type Direction =
  | "down"
  | "up"
  | "left"
  | "right"
  | "leftDown"
  | "leftUp"
  | "rightDown"
  | "rightUp";

export type AnimationKey =
  | "walkDown"
  | "walkUp"
  | "walkLeft"
  | "walkRight"
  | "walkLeftDown"
  | "walkLeftUp"
  | "walkRightDown"
  | "walkRightUp";

export type PathPoint = { x: number; y: number };
