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
| 'initMap';

export type RenderAction = {
  id: RenderActionId;
  func: (props: {
    action: RenderAction;
    actionQueue: RenderAction[];
  }) => void;
  repeat: boolean;
  stack: boolean;
  payload: any[];
  pause: boolean;
  time: number;
  maxTime: number;
};

export type RenderActionPartial = {
  id: RenderActionId;
  func: (props: {
    action: RenderAction;
    actionQueue: RenderAction[];
  }) => void;
  repeat?: boolean;
  stack?: boolean;
  payload?: any[];
  pause?: boolean;
  time?: number;
  maxTime?: number;
};

export type RenderActionAny = RenderAction;

export type RenderActionList = Record<RenderActionId, RenderAction> | {};
