export type RenderActionId =
| "renderMapChunk"
| "playerTurn"
| "playerWalk"
| "playerStopWalk"
| "playerRun"
| "cameraMove"
| "cameraSnap"
| "npcTurn"
| "npcWalk"
| "npcStopWalk"
| "npcRun"
| 'initMap'
| 'itemPlace'
| 'itemAnimate'
| 'itemAnimateDefault'
| 'npcPlace';

export type RenderAction = {
  id: string;
  func: (props: {
    action: RenderAction;
    actionQueue: RenderAction[];
  }) => void;
  repeat: boolean;
  stack: boolean;
  payload: any[];
  pause: boolean;
  time: number;
  maxTime: number | (() => number);
};

export type RenderActionPartial = {
  id: string;
  func: (props: {
    action: RenderAction;
    actionQueue: RenderAction[];
  }) => void;
  repeat?: boolean;
  stack?: boolean;
  payload?: any[];
  pause?: boolean;
  time?: number;
  maxTime?: number | (() => number);
};

export type RenderActionAny = RenderAction;

export type RenderActionList = Record<RenderActionId, RenderAction> | {};
