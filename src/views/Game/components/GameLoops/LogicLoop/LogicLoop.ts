import { LogicActionAny, LogicAction } from "./types";

const LogicLoop = (fps = 60) => {
  let interval: number | undefined = undefined;

  const start = () => {
    const delay = Math.round(1000 / fps);

    interval = setInterval(() => {
      const queue = window.state.logicQueue;

      const newLogicQueue = queue.reduce(
        (acc: LogicActionAny[], action: LogicActionAny) => {
          const { id, func, time, maxTime, repeat } = action;

          func({ action, logicQueue: queue });

          if (repeat) return [...acc, { ...action }];
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
    window.state.logicQueue = [];
  };

  return { start, pause, resume, stop };
};

export default LogicLoop;
