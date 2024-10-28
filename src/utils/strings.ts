export const numberFromString = (string: string) =>
  (string.match(/\d/g) ?? []).join();

export const toTitleCase = (word: string) =>
  `${word[0].toUpperCase()}${word.slice(1)}`;
