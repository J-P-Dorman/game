import * as THREE from "three";
import { CreatureData } from "../../../../../../types";

export type State = {
    npcData?: CreatureData;
    spriteGroup?: THREE.Group;
    sprites: Record<string, THREE.Group>;
    currentSpriteKey: string;
    currentSprite?: THREE.Group;
    isWalking: boolean;
    isRunning: boolean;
    position: { x: number, y: number },
    direction: 'down' | 'up' | 'left' | 'right';
  };
  
  export type LoadArgs = {
    camera: THREE.OrthographicCamera,
    npcData: CreatureData
  };

export   type Direction =
| "down"
| "up"
| "left"
| "right"
| "leftDown"
| "leftUp"
| "rightDown"
| "rightUp";

export type AnimationKey = 'walkDown' | 'walkUp' | 'walkLeft' | 'walkRight' | 'walkLeftDown' | 'walkLeftUp' | 'walkRightDown' | 'walkRightUp'
