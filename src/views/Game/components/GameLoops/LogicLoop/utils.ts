import { LogicAction, LogicActionPartial } from "./types";
import { State } from "../../../../../types";

declare global {
  interface Window {
    state: State;
    scene: any;
  }
}

export const createLogicAction = ({
  id,
  func,
  repeat = false,
  stack = true,
  payload = [],
  pause = false,
  time = 0,
  maxTime = 0,
}: LogicActionPartial): LogicAction => ({
  id,
  func,
  repeat,
  stack,
  payload,
  pause,
  time,
  maxTime,
});

export const pushToLogicQueue = (logicAction: LogicAction) => {
  const { stack } = logicAction;
  const existsInQueue = Boolean(
    window.state.logicQueue.find((queueItem) => queueItem.id === logicAction.id)
  );

  if (!existsInQueue || (existsInQueue && stack))
    window.state.logicQueue.push(logicAction);
};

export const removeAllFromLogicQueue = (ids: string[]) => {
  window.state.logicQueue = window.state.logicQueue.filter(
    (logicAction) => !ids.includes(logicAction.id)
  );
};

export const replaceAllInLogicQueue = (
  idFrom: string,
  actionTo: LogicAction
) => {
  removeAllFromLogicQueue([idFrom]);
  pushToLogicQueue(actionTo);
};

export const isInLogicQueue = (id: string, payload?: any[]) => {
  return Boolean(
    window.state.logicQueue.find((action) => {
      if (payload)
        return (
          action.id === id &&
          JSON.stringify(payload) === JSON.stringify(action.payload)
        );
      return action.id === id;
    })
  );
};

export const dispatchLogic = (action: LogicAction, payload: any[] = []) => {
  pushToLogicQueue({
    ...action,
    payload,
  });
};

export const logicNow = (action: LogicAction, payload: any[] = []) => {
  const newAction = {...action, payload};
  action.func({action: newAction, logicQueue: window.state.logicQueue});
};