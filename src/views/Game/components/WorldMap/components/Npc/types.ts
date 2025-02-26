import * as THREE from "three";
import { CreatureData } from "../../../../../../types";

export type State = {
  spriteSheet: any;
  size: number;
  onInteract: () => void;
  currentSpriteKey: string;
  currentSprite: THREE.Group;
  spriteGroup: THREE.Group;
  spriteList: Record<string, THREE.Group>;
  position: { x: number; y: number };
  movement: {
    direction: Direction;
    path: { x: number; y: number }[];
    currentIndex: number;
    speed: number;
    loop: boolean;
  };
};

export type LoadArgs = {
  creatureData: CreatureData;
};

export type Direction =
  | "left"
  | "right"
  | "up"
  | "down"
  | "downLeft"
  | "downRight"
  | "upLeft"
  | "upRight";

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
