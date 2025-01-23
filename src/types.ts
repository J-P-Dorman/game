import { RenderAction } from "./views/Game/components/GameLoops/RenderLoop/types";
import { LogicAction } from "./views/Game/components/GameLoops/LogicLoop/types";
import THREE from "three";

export type TileData = any;
export type RowData = TileData[];
export type ChunkDataOld = {
  id: string;
  position: { x: number; z: number };
  rows: RowData[];
};
export type ChunkData = RowData[][];
export type MapDataOld = Record<string, ChunkData>;
export type MapData = ChunkData[][];

export type CreatureData = {
  id: string;
  spriteSheet: {
    image: string;
    spriteWidth: number;
    spriteHeight: number;
    sheetWidth: number;
    sheetHeight: number;
    defaultSprite: string;
    sheetMap: string[][];
    animationMap: Record<string, {frames: string[]; end: string;}>;
  };
  dialogue?: {}
};

export type Tag = any;

export type PlayerPaint = any;

export type State = {
  fps: number;
  paused: boolean;
  logicQueue: LogicAction[];
  renderQueue: RenderAction[];
  paintHistory: {
    player: PlayerPaint[];
    shoreUp: number;
    shoreUpLeft: number;
  };
  gameSize: {
    width: number;
    height: number;
  };
  player: {
    position: {
      x: number;
      y: number;
    },
    direction: 'down' | 'up' | 'left' | 'right' | 'leftDown' | 'leftUp' | 'rightDown' | 'rightUp',
    isWalking: boolean,
    isRunning: boolean
  };
  flags: {
    hasSpokenToSasha: boolean;
  }
};

declare global {
  interface Window {
    state: State;
    scene: any;
  }
}

export type AnimationKey = "shoreUp" | "shoreUpLeft";

export type CellElsAnimated = Record<
  AnimationKey,
  {
    cellEl: HTMLDivElement;
    frameEls: HTMLDivElement[];
  }[]
>;

export type SpriteSheet = (THREE.Group | undefined)[][];
