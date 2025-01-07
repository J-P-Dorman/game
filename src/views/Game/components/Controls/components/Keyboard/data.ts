import { LogicAction, LogicActionId } from "../../../GameLoops/LogicLoop/types";
import {
  dispatchLogic,
  isInLogicQueue,
  logicNow,
  pushToLogicQueue,
  removeAllFromLogicQueue,
} from "../../../GameLoops/LogicLoop/utils";
import { RenderAction } from "../../../GameLoops/RenderLoop/types";
import { dispatchRender, isInRenderQueue, pushToRenderQueue, removeAllFromRenderQueue } from "../../../GameLoops/RenderLoop/utils";
import { playerRunSpeed, playerWalkSpeed } from "../../../Player/constants";



const movementKeys = ["w", "a", "s", "d"];

const move = (
  key: string,
  isShift: boolean,
  allPressedKeys: string[],
  logicActions: Record<LogicActionId, LogicAction>,
  renderActions: any
) => {
  if (key === "w" && !isShift) {
    removeAllFromLogicQueue(["playerMove, playerTurn"]);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    logicNow(logicActions.playerTurn, ['up']);
    dispatchLogic(logicActions.playerMove, [0, playerWalkSpeed, false]);
    dispatchLogic(logicActions.cameraMove, [0, playerWalkSpeed]);
  }

  if (key === "w" && isShift) {
    removeAllFromLogicQueue(["playerMove, playerTurn"]);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    logicNow(logicActions.playerTurn, ['up']);
    dispatchLogic(logicActions.playerMove, [0, playerRunSpeed, true]);
    dispatchLogic(logicActions.cameraMove, [0, playerRunSpeed,]);
  }

  if (key === "a" && !isShift) {
    removeAllFromLogicQueue(["playerMove, playerTurn"]);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    logicNow(logicActions.playerTurn, ['left']);
    dispatchLogic(logicActions.playerMove, [-playerWalkSpeed, 0, false]);
    dispatchLogic(logicActions.cameraMove, [-playerWalkSpeed, 0]);
  }

  if (key === "a" && isShift) {
    removeAllFromLogicQueue(["playerMove, playerTurn"]);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    logicNow(logicActions.playerTurn, ['left']);
    dispatchLogic(logicActions.playerMove, [-playerRunSpeed, 0, true]);
    dispatchLogic(logicActions.cameraMove, [-playerRunSpeed, 0]);
  }

  if (key === "s" && !isShift) {
    removeAllFromLogicQueue(["playerMove, playerTurn"]);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    logicNow(logicActions.playerTurn, ['down']);
    dispatchLogic(logicActions.playerMove, [0, -playerWalkSpeed, false]);
    dispatchLogic(logicActions.cameraMove, [0, -playerWalkSpeed]);
  }

  if (key === "s" && isShift) {
    removeAllFromLogicQueue(["playerMove, playerTurn"]);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    logicNow(logicActions.playerTurn, ['down']);
    dispatchLogic(logicActions.playerMove, [0, -playerRunSpeed, true]);
    dispatchLogic(logicActions.cameraMove, [0, -playerRunSpeed]);
  }

  if (key === "d" && !isShift) {
    removeAllFromLogicQueue(["playerMove, playerTurn"]);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    logicNow(logicActions.playerTurn, ['right']);
    dispatchLogic(logicActions.playerMove, [playerWalkSpeed, 0, false]);
    dispatchLogic(logicActions.cameraMove, [playerWalkSpeed, 0]);
  }

  if (key === "d" && isShift) {
    removeAllFromLogicQueue(["playerMove"]);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    logicNow(logicActions.playerTurn, ['right']);
    dispatchLogic(logicActions.playerMove, [playerRunSpeed, 0, true]);
    dispatchLogic(logicActions.cameraMove, [playerRunSpeed, 0]);
  }
};

export const decideAction = (
  key: string,
  shiftKey: boolean,
  isKeyDown: boolean,
  allPressedKeys: string[],
  logicActions: Record<LogicActionId, LogicAction>,
  renderActions: any
) => {
  const { playerMove } = logicActions;
  const { playerTurn, playerWalk, playerStopWalk } = renderActions;
  const isKeyUp = !isKeyDown;
  const isShift = shiftKey || allPressedKeys.includes("shift");
  const lastMovementKey = allPressedKeys.findLast((pressedKey) =>
    movementKeys.includes(pressedKey)
  );
  const lastPressedKey = allPressedKeys[allPressedKeys.length - 1]
  const isDoublePress = allPressedKeys.includes(key);

  // Move player
  if (isKeyDown && !isDoublePress)
    move(key, isShift, allPressedKeys, logicActions, renderActions);

  // Restore previous direction
  if (isKeyUp && movementKeys.includes(key)) {
    removeAllFromLogicQueue(["playerMove"]);
    removeAllFromRenderQueue(["playerWalk", 'playerRun']);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);

    console.log('isShift: ', isShift);
    console.log('shiftKey: ', shiftKey);
    console.log('allPressedKeys.includes("Shift"): ', allPressedKeys.includes("Shift"));
    console.log('allPressedKeys: ', allPressedKeys);
    console.log(': ', );
    console.log(': ', );
    console.log(': ', );
    move(lastMovementKey, isShift, allPressedKeys, logicActions, renderActions);
  }

  // Stop player
  if (isKeyUp && movementKeys.includes(key) && !isDoublePress) {
    removeAllFromLogicQueue(["playerMove"]);
    removeAllFromRenderQueue(["playerWalk", 'playerRun']);
    removeAllFromLogicQueue(["cameraMove"]);
    removeAllFromRenderQueue(["cameraMove"]);
    move(lastMovementKey, isShift, allPressedKeys, logicActions, renderActions);
    dispatchLogic(logicActions.playerStop);
    dispatchRender(renderActions.playerStopWalk);
  }

  // Activate shift
  if (isKeyDown && key === "shift" && !isDoublePress) {
    removeAllFromLogicQueue(["playerMove", "cameraMove"]);
    move(lastMovementKey, true, allPressedKeys, logicActions, renderActions);
  }

  // Deactivate shift
  if (isKeyUp && key === "shift") {
    removeAllFromLogicQueue(["playerMove"]);
    move(lastMovementKey, false, allPressedKeys, logicActions, renderActions);
  }
};
