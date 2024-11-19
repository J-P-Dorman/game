import THREE from "three";

interface Props {
  camera: THREE.OrthographicCamera;
}

const Keyboard = ({ camera }: Props) => {
  const onKeyDown = (e: KeyboardEvent) => {};
  const onKeyUp = (e: KeyboardEvent) => {};

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
};

export default Keyboard;

// import { WalkActionId } from "../../../../types";
// import { createAction } from "../../../Core/Core";
// import { pauseGame, resumeGame } from "../../../PauseMenu/helpers";
// import { movePlayer, turnPlayer, walkPlayer } from "../../../Player/helpers";

// type Props = (props: {
//   pauseContainerEl: HTMLDivElement;
//   chunkContainerEl: HTMLDivElement;
// }) => void;
// const Keyboard: Props = ({ pauseContainerEl, chunkContainerEl }) => {
//   const getActionId = (key: string, meta = false) => {
//     const mappings: Record<string, string> = {
//       w: "walkUp",
//       s: "walkDown",
//       a: "walkLeft",
//       d: "walkRight",
//       Space: "context",
//       Escape: "pause",
//       ArrowUp: "dodgeUp",
//       ArrowDown: "dodgeDown",
//       ArrowLeft: "dodgeLeft",
//       ArrowRight: "dodgeRight",
//     };
//     const metaMappings: Record<string, string> = {
//       w: "runUp",
//       s: "runDown",
//       a: "runLeft",
//       d: "runRight",
//       space: "sprintContext",
//     };

//     if (meta && metaMappings.hasOwnProperty(key)) return metaMappings[key];
//     if (mappings.hasOwnProperty(key)) return mappings[key];
//     return undefined;
//   };

//   document.addEventListener("keydown", (e) => {
//     const { key } = e;
//     const actionId = getActionId(key);
//     const turnId = (() => {
//       if (key === "w") return "turnUp";
//       if (key === "s") return "turnDown";
//       if (key === "a") return "turnLeft";
//       if (key === "d") return "turnRight";
//     })();
//     const walkId = (() => {
//       if (key === "w") return "walkUp";
//       if (key === "s") return "walkDown";
//       if (key === "a") return "walkLeft";
//       if (key === "d") return "walkRight";
//     })();
//     const moveId = (() => {
//       if (key === "w") return "moveUp";
//       if (key === "s") return "moveDown";
//       if (key === "a") return "moveLeft";
//       if (key === "d") return "moveRight";
//     })();
//     const actionExists = window.state.actionQueue.find(
//       ({ id }) => id === actionId || id === turnId || id === moveId
//     );

//     // Pause
//     // ================================
//     if (actionId === "pause") {
//       if (window.state.paused) {
//         window.state.actionQueue.push(
//           createAction({
//             id: actionId,
//             func: ({ action, actionQueue }) => {
//               resumeGame({ pauseContainerEl });
//             },
//             pause: true,
//           })
//         );
//       }

//       if (!window.state.paused) {
//         window.state.actionQueue.push(
//           createAction({
//             id: actionId,
//             func: ({}) => {
//               pauseGame({ pauseContainerEl });
//             },
//             pause: true,
//           })
//         );
//       }
//     }

//     // Turn
//     // ================================
//     if (turnId && !actionExists) {
//       window.state.actionQueue.push(
//         createAction({
//           id: turnId,
//           func: ({ action }) => {
//             turnPlayer({ action });
//           },
//         })
//       );
//     }

//     // Walk
//     // ================================
//     if (walkId && !actionExists) {
//       window.state.actionQueue.push(
//         createAction({
//           id: walkId,
//           func: ({ action, actionQueue }) => {
//             walkPlayer({ action, actionQueue });
//           },
//           maxTime: 0,
//           tags: ["walkPlayer"],
//         })
//       );

//       window.state.actionQueue.push(
//         createAction({
//           id: walkId as WalkActionId,
//           func: ({ action, actionQueue }) => {
//             walkPlayer({ action, actionQueue });
//           },
//           maxTime: 200,
//           repeat: true,
//           tags: ["walkPlayer"],
//         })
//       );
//     }

//     if (moveId && !actionExists) {
//       window.state.actionQueue.push(
//         createAction({
//           id: moveId as WalkActionId,
//           func: ({ action, actionQueue }) => {
//             movePlayer({ action, actionQueue, chunkContainerEl });
//           },
//           repeat: true,
//           payload: {
//             speed: 20,
//           },
//         })
//       );
//     }
//   });

//   document.addEventListener("keyup", (e) => {
//     const { key } = e;
//     const actionId = getActionId(key);
//     const actionExists = window.state.actionQueue.find(
//       ({ id }) => id === actionId
//     );
//     const turnId = (() => {
//       if (key === "w") return "Up";
//       if (key === "s") return "Down";
//       if (key === "a") return "Left";
//       if (key === "d") return "Right";
//     })();

//     if (actionId && actionExists) {
//       // Stop Walking
//       // ================================
//       window.state.actionQueue = window.state.actionQueue.filter((action) => {
//         return !action.id.includes(turnId);
//       });

//       // Resting State
//       // ================================
//       const shouldRest = !window.state.actionQueue.find((action) => {
//         return action.id.includes("walk");
//       });

//       if (shouldRest) {
//         window.state.actionQueue.push(
//           createAction({
//             id: `turn${turnId}`,
//             func: ({ action }) => {
//               turnPlayer({ action });
//             },
//           })
//         );
//       }
//     }
//   });
// };

// export default Keyboard;
