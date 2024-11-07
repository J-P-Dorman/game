import { Action, BaseAction } from "../../types";

// export const fixedUpdate = (callback: (interval: number) => void) => {
//   const interval = 20;
//   setInterval(() => {
//     callback(interval);
//   }, interval);
// };

export const createUpdateAction = <
  S extends string,
  T extends Record<string, unknown>,
>({
  id,
  func,
  time = 0,
  maxTime = 0,
  repeat = false,
  tags = [],
  pause = false,
  payload = {} as T,
}: Action<S, T>): Action<S, T> => ({
  id,
  func,
  repeat,
  tags,
  pause,
  payload,
});

export const update = (fps = 60) => {
  const interval = Math.round(1000 / fps);

  setInterval(() => {
    const updateQueue = window.state.updateQueue;

    const newUpdateQueue = updateQueue.reduce(
      (acc: BaseAction[], action: BaseAction) => {
        const { id, func, time, maxTime, repeat } = action;

        func({ action, actionQueue: updateQueue });

        if (repeat) return [...acc, { ...action }];
        return acc;
      },
      []
    );

    window.state.updateQueue = newUpdateQueue;
  }, interval);
};

export const fixedUpdate = () => {
  const interval = 20;
  setInterval(() => {
    const { actionQueue } = window.state;

    const newActionQueue = actionQueue.reduce(
      (acc: BaseAction[], action: BaseAction) => {
        const { id, func, time, maxTime, repeat } = action;
        const newTime = time + interval;

        if (newTime >= maxTime) func({ action, actionQueue });

        if (newTime < maxTime) return [...acc, { ...action, time: newTime }];
        if (newTime >= maxTime && repeat)
          return [...acc, { ...action, time: 0 }];
        return acc;
      },
      []
    );

    window.state.actionQueue = newActionQueue;
  }, 20);
};

export const createAction = <
  S extends string,
  T extends Record<string, unknown>,
>({
  id,
  func,
  time = 0,
  maxTime = 0,
  repeat = false,
  tags = [],
  pause = false,
  payload = {} as T,
}: Action<S, T>): Action<S, T> => ({
  id,
  func,
  time,
  maxTime,
  repeat,
  tags,
  pause,
  payload,
});
