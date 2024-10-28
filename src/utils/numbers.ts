export const getClosestIndex = (options: number[], goal: number) => {
  var closest = options.reduce(
    function (prev, curr, i) {
      return Math.abs(curr - goal) <= Math.abs(prev.value - goal)
        ? { index: i, value: curr }
        : prev;
    },
    { value: 0, index: 0 }
  );

  return closest;
};
