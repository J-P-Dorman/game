export type GetGameSize = (rootEl: HTMLDivElement) => {
  width: number;
  height: number;
};

export type Area = {
  x1y1: { x: number, y: number },
  x2y1: { x: number, y: number },
  x1y2: { x: number, y: number },
  x2y2: { x: number, y: number }
}
