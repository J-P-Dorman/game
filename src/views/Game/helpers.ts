export const disableRightClick = (canvas: HTMLCanvasElement) => {
  canvas.oncontextmenu = () => false;
};
