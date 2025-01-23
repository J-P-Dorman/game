export const arrayToObject = <T extends any>(
	keys: string[],
	values: T[]
): Record<string, T> => {
	return values.reduce((acc: Record<string, T>, value: T, i) => {
		const key = keys[i];

		return { ...acc, [key]: value };
	}, {});
};

export const includesEvery = (bigArray: unknown[], smallArray: unknown[]) =>
	smallArray.every((smallItem) => bigArray.includes(smallItem));