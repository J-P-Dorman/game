export type LogicActionId =
  | "playerMove"
  | "playerTurn"
  | "playerStop"
  | "cameraMove"
  | "cameraSnap"
  | "cameraStopMove"
  | "npcMove"
  | "npcTurn"
  | "npcStop"
  | 'initMap'
  | 'placeItem';

/**
 * Each logic action is something to be done on a tick of the logic cycle
 *
 * @param id has to be unique for each action type to see if it's already in
 * queue
 * @param func the callback function to be run when the action is invoked
 * @param repeat Should the action be cleared from queue on invoke or should it
 * repeat until manually cleared
 * @param stack Should it be possible to stack multiple of this action into the
 * queue
 * @param tags Tags used for categorising / prioritising actions
 * @param pause Should this action keep running when the user pauses the game
 * @param time How much time has passed since this action was last invoked
 * @param maxTime How much time should be waited before invoking the action
 */
export type LogicAction = {
  id: LogicActionId;
  func: (props: { action: LogicAction; logicQueue: LogicAction[] }) => void;
  repeat: boolean;
  stack: boolean;
  payload: any[];
  pause: boolean;
  time: number;
  maxTime: number;
};

export type LogicActionPartial = {
  id: LogicActionId;
  func: (props: { action: LogicAction; logicQueue: LogicAction[] }) => void;
  repeat?: boolean;
  stack?: boolean;
  payload?: any[];
  pause?: boolean;
  time?: number;
  maxTime?: number;
};

export type LogicActionList = Record<LogicActionId, LogicAction> | {};
