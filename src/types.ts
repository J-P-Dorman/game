export type Anchor =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "center"
  | "bottomLeft"
  | "bottomRight"
  | "topLeft"
  | "topRight";

export type Item = {
  image?: string;
  width: number;
  height: number;
  anchor: Anchor;
  align: Anchor;
};

export type Texture = { color: string; images?: string[]; speed?: number };

export type CellData = { id: string; texture: Texture; item: Item };
export type RowData = CellData[];
export type ChunkData = RowData[];
export type MapData = ChunkData[];

export type CreatureData = {
  id: "player";
  defaultState: string;
  states: Record<string, { image: string; onShow: () => void }>;
};

export type Tag = any;

export type Action<T extends string, S extends Record<string, unknown>> = {
  id: T;
  func: (props: { action: Action<T, S>; actionQueue: Action<T, S>[] }) => void;
  time?: number;
  maxTime?: number;
  repeat?: boolean;
  tags?: Tag[];
  pause?: boolean;
  payload?: S;
};

export type WalkActionId =
  | "moveLeft"
  | "moveRight"
  | "moveUp"
  | "moveDown"
  | "moveLeftDown"
  | "moveLeftUp"
  | "moveRightDown"
  | "moveRightUp";
export type WalkAction = Action<WalkActionId, { speed: number }>;

export type BaseAction = Action<string, {}>;

export type PlayerPaint = any;

export type State = {
  paused: boolean;
  actionQueue: BaseAction[];
  paintHistory: {
    player: PlayerPaint[];
    shore: number;
  };
  gameSize: {
    width: number;
    height: number;
  };
  x: number;
  y: number;
};

declare global {
  interface Window {
    state: State;
  }
}
