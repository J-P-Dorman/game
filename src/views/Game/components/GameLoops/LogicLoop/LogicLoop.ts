import { LogicAction } from "./types";

const LogicLoop = () => {
  let interval: number | undefined = undefined;

  const start = () => {
    const delay = 20;

    interval = setInterval(() => {
      const queue = window.state.logicQueue;

      const newLogicQueue = queue.reduce(
        (acc: LogicAction[], action: LogicAction) => {
          const { id, func, time, maxTime, repeat } = action;
          const timeElapsed = time >= maxTime;
          const newTime = timeElapsed ? 0 : time + delay;

          if(timeElapsed) func({ action, logicQueue: queue });

          if (repeat) return [...acc, { ...action, time: newTime }];
          return acc;
        },
        []
      );

      window.state.logicQueue = newLogicQueue;
    }, delay);
  };

  const pause = () => {
    if (interval) clearInterval(interval);
    interval = undefined;
  };

  const resume = () => {
    start();
  };

  const stop = () => {
    if (interval) clearInterval(interval);
    interval = undefined;
    window.state.logicQueue = [];
  };

  return { start, pause, resume, stop };
};

export default LogicLoop;
