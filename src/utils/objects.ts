export const filterObject = <T>(
  callback: ({ key, value }: { key: string; value: T }) => boolean,
  object: Record<string, T>
): Record<string, T> => {
  return Object.entries(object).reduce((acc, [key, value]) => {
    const includeEntry = callback({ key, value });

    return { ...acc, ...(includeEntry ? { [key]: value } : {}) };
  }, {});
};
