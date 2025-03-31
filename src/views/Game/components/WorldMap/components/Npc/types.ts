import * as THREE from "three";
import { CreatureData } from "../../../../../../types";
import { Area } from '../../../../types';
import { AttachToCamera, FitToCamera } from "../../../Camera/types";
import { LogicAction } from "../../../GameLoops/LogicLoop/types";

export type State = {
  id: string;
  spriteSheet: any;
  size: number;
  onInteract: () => void;
  currentSpriteKey: string;
  currentSprite: THREE.Group;
  spriteGroup: THREE.Group;
  spriteList: Record<string, THREE.Group>;
  position: { x: number; y: number };
  colliders: Record<string, Area>,
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
  onInteract: () => void;
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
