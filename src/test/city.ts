export const createCity = (size: number) => {
  const data: any[] = [];

  const initialize = () => {
    for (let x = 0; x < size; x++) {
      const column: any[] = [];

      for (let y = 0; y < size; y++) {
        const tile = { x, y };
        column.push(tile);
      }
      data.push(column);
    }
  };

  initialize();

  return { size, data };
};
