import { RenderAction } from "./views/Game/components/GameLoops/RenderLoop/types";
import { LogicAction } from "./views/Game/components/GameLoops/LogicLoop/types";

export type TileData = any;
export type RowData = TileData[];
export type ChunkData = {
  id: string;
  position: { x: number; z: number };
  rows: RowData[];
};
export type MapData = Record<string, ChunkData>;

export type CreatureData = {
  id: "player";
  defaultState: string;
  spriteSheet: {
    image: string;
    frameWidth: number;
    frameHeight: number;
    sheetWidth: number;
    sheetHeight: number;
  };
  states: Record<string, { coordinates: { x: number; y: number } }>;
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
