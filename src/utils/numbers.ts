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

/**
 * Figure out what % a number is of another number
 * @example
 * const part = 20;
 * const total = 200;
 * const percent = numberToPercent(part, total);
 * console.log(percent) // 10
 *
 * @param part the number you're trying to find the % of
 * @param total the number representing 100%
 */
export const numberToPercent = (part: number, total: number) => (part / total) * 100;

/**
 * Figure out the numerical value from a percent and total
 * @example
 * const percent = 10;
 * const total = 200;
 * const value = percentToNumber(percent, total);
 * console.log(value) // 20
 * 
 * @param percent the percent value
 * @param total the number representing 100%
 */
export const percentToNumber = (total: number, percent: number) => (percent / 100) * total;