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

          if(timeElapsed) {
            const maybeVoid = func({ action, logicQueue: queue });
            const funcReturn = Array.isArray(maybeVoid) ? maybeVoid : [];
            const shouldRepeat = typeof repeat === 'function' ? repeat(funcReturn) : repeat;

            // If we should repeat throw this action back into the queue at 0 time
            if (shouldRepeat) return [...acc, { ...action, time: newTime }];

            // Clear this action from the queue
            return acc;
          }
         
          // Keep counting time to execution of callback
          return [...acc, { ...action, time: newTime }];
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
