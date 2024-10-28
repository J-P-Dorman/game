import { BaseAction, WalkAction } from "../../types";

export const turnPlayer = ({ action }: { action: BaseAction }): void => {
  const { id: actionId } = action;
  const paintId = (() => {
    if (actionId === "turnUp") return "turnUp";
    if (actionId === "turnDown") return "turnDown";
    if (actionId === "turnLeft") return "turnLeft";
    if (actionId === "turnRight") return "turnRight";
  })();

  window.state.paintHistory.player?.push({ id: paintId, actionId });

  const currentStateEl = document.querySelector("#player .state.active");
  const nextStateEl = document.querySelector(`#player .state#${paintId}`);

  if (currentStateEl) currentStateEl.classList.remove("active");
  if (nextStateEl) nextStateEl.classList.add("active");
};

export const walkPlayer = ({
  action,
  actionQueue,
}: {
  action: BaseAction;
  actionQueue: BaseAction[];
}): void => {
  const { id: actionId } = action;

  const latestWalkAction = actionQueue.findLast((action) =>
    action.tags.includes("walkPlayer")
  );
  const skipWalk = Boolean(latestWalkAction.id !== actionId);

  if (skipWalk) return;

  const paintHistory = window.state.paintHistory.player ?? [];
  const lastPaint = paintHistory[paintHistory.length - 1];
  const lastPaintId = lastPaint?.id;
  const paintId = (() => {
    if (actionId === "walkUp" && lastPaintId !== "walkUp1") return "walkUp1";
    if (actionId === "walkUp" && lastPaintId === "walkUp1") return "walkUp2";
    if (actionId === "walkDown" && lastPaintId !== "walkDown1")
      return "walkDown1";
    if (actionId === "walkDown" && lastPaintId === "walkDown1")
      return "walkDown2";
    if (actionId === "walkLeft" && lastPaintId !== "walkLeft1")
      return "walkLeft1";
    if (actionId === "walkLeft" && lastPaintId === "walkLeft1")
      return "walkLeft2";
    if (actionId === "walkRight" && lastPaintId !== "walkRight1")
      return "walkRight1";
    if (actionId === "walkRight" && lastPaintId === "walkRight1")
      return "walkRight2";
    if (actionId === "walkUpLeft" && lastPaintId !== "walkUpLeft1")
      return "walkUpLeft1";
    if (actionId === "walkUpLeft" && lastPaintId === "walkUpLeft1")
      return "walkUpLeft2";
    if (actionId === "walkDownLeft" && lastPaintId !== "walkDownLeft1")
      return "walkDownLeft1";
    if (actionId === "walkDownLeft" && lastPaintId === "walkDownLeft1")
      return "walkDownLeft2";
    if (actionId === "walkUpRight" && lastPaintId !== "walkUpRight1")
      return "walkUpRight1";
    if (actionId === "walkUpRight" && lastPaintId === "walkUpRight1")
      return "walkUpRight2";
    if (actionId === "walkDownRight" && lastPaintId !== "walkDownRight1")
      return "walkDownRight1";
    if (actionId === "walkDownRight" && lastPaintId === "walkDownRight1")
      return "walkDownRight2";
  })();

  window.state.paintHistory.player.push({ id: paintId, actionId });

  const currentStateEl = document.querySelector("#player .state.active");
  const nextStateEl = document.querySelector(`#player .state#${paintId}`);

  currentStateEl.classList.remove("active");
  nextStateEl.classList.add("active");
};

export const movePlayer = ({
  chunkContainerEl,
  action,
  actionQueue,
}: {
  chunkContainerEl: HTMLDivElement;
  action: WalkAction;
  actionQueue: BaseAction[];
}): void => {
  const { id: actionId, payload } = action;
  const { speed } = payload;

  const x = window.state.x ?? 0;
  const y = window.state.y ?? 0;
  const diagonalSpeed = speed / 2;

  const directionsRegular = {
    moveLeft: { x: x + speed, y },
    moveRight: { x: x - speed, y },
    moveUp: { x, y: y + speed },
    moveDown: { x, y: y - speed },
  };
  const directionsDiagonal = {
    moveLeftDown: { x: x + diagonalSpeed, y: y - diagonalSpeed },
    moveLeftUp: { x: x + diagonalSpeed, y: y + diagonalSpeed },
    moveRightDown: { x: x - diagonalSpeed, y: y + diagonalSpeed },
    moveRightUp: { x: x + diagonalSpeed, y: y - diagonalSpeed },
  };
  const directions = { ...directionsRegular, ...directionsDiagonal };
  const diagonalIds = Object.keys(directionsDiagonal);

  const isDiagonal = diagonalIds.includes(actionId);
  const hasDiagonal = Boolean(
    actionQueue.find(({ id }) => diagonalIds.includes(id))
  );

  // const hasVertical = Boolean(
  //   actionQueue.find(({ id }) => id === "moveUp" || id === "moveDown")
  // );
  // const hasVertical = Boolean(
  //   actionQueue.find(({ id }) => id === "moveUp" || id === "moveDown")
  // );

  // const speed = isDiagonal ? 6 : 8;

  const newCoordinates = directions[actionId] ?? { x, y };

  if (x !== newCoordinates.x || y !== newCoordinates.y) {
    window.state.x = newCoordinates.x;
    window.state.y = newCoordinates.y;

    chunkContainerEl.style.transform = `translate3d(${newCoordinates.x}px, ${newCoordinates.y}px, 0px)`;
  }
};
