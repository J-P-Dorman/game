export const forIncrement = <T>(
  callback: (index: number, result: T | undefined) => T | undefined,
  max: number,
  init?: T | undefined
): T | undefined => {
  let accumulator = init;

  for (let i = 0; i < max; i++) {
    accumulator = callback(i, accumulator);
  }

  return accumulator;
};
