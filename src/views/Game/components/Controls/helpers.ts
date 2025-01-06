// import { toTitleCase } from "../../../../utils";
// import { LogicActionId } from "../GameLoops/LogicLoop/types";
// import {
//   createLogicAction,
//   isInLogicQueue,
//   pushToLogicQueue,
//   removeAllFromLogicQueue,
// } from "../GameLoops/LogicLoop/utils";

// const move = (id: LogicActionId, func: () => void) => {
//   return () => {
//     pushToLogicQueue(
//       createLogicAction({
//         id,
//         func,
//         repeat: true,
//         stack: false,
//       })
//     );
//   };
// };

// const stop = (id: string) => {
//   removeAllFromLogicQueue(id);
// };

// const maxWalkSpeed = 1;
// const maxRunSpeed = 3;

// export const moveActions = {
//   analogue: {
//     walk: (
//       x:{ direction: string; intensity: number },
//       y: { direction: string; intensity: number }
//     ) => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "walkAnalogue",
//           func: () => {
//             const valueX = (maxWalkSpeed / 100) * x.intensity;
//             const valueY = (maxWalkSpeed / 100) * y.intensity;

//             window.state.playerPosition.x =
//               x.direction === "left"
//                 ? window.state.playerPosition.x - valueX
//                 : window.state.playerPosition.x + valueX;
//             window.state.playerPosition.x =
//               y.direction === "down"
//                 ? window.state.playerPosition.y - valueY
//                 : window.state.playerPosition.y + valueY;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     run: (
//       x:{ direction: string; intensity: number },
//       y: { direction: string; intensity: number }
//     ) => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "runAnalogue",
//           func: () => {
//             const valueX = (maxRunSpeed / 100) * x.intensity;
//             const valueY = (maxRunSpeed / 100) * y.intensity;

//             window.state.playerPosition.x =
//               x.direction === "left"
//                 ? window.state.playerPosition.x - valueX
//                 : window.state.playerPosition.x + valueX;
//             window.state.playerPosition.x =
//               y.direction === "down"
//                 ? window.state.playerPosition.y - valueY
//                 : window.state.playerPosition.y + valueY;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     stop: () => {
//       stop("walkAnalogue");
//       stop("runAnalogue");
//     }
//   },
//   digital: {
//     walkDown: () => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "walkDown",
//           func: () => {
//             window.state.playerPosition.y -= maxWalkSpeed;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     runDown: () => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "runDown",
//           func: () => {
//             window.state.playerPosition.y -= maxRunSpeed;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     stopDown: () => {
//       stop("walkDown");
//       stop("runDown");
//     },
//     walkUp: () => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "walkUp",
//           func: () => {
//             window.state.playerPosition.y += maxWalkSpeed;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     runUp: () => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "runUp",
//           func: () => {
//             window.state.playerPosition.y += maxRunSpeed;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     stopUp: () => {
//       stop("walkUp");
//       stop("runUp");
//     },
//     walkLeft: () => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "walkLeft",
//           func: () => {
//             window.state.playerPosition.x -= maxWalkSpeed;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     runLeft: () => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "runLeft",
//           func: () => {
//             window.state.playerPosition.x -= maxRunSpeed;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     stopLeft: () => {
//       stop("walkLeft");
//       stop("runLeft");
//     },
//     walkRight: () => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "walkRight",
//           func: () => {
//             window.state.playerPosition.x += maxWalkSpeed;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     runRight: () => {
//       pushToLogicQueue(
//         createLogicAction({
//           id: "runRight",
//           func: () => {
//             window.state.playerPosition.x += maxRunSpeed;
//           },
//           repeat: true,
//           stack: false,
//         })
//       );
//     },
//     stopRight: () => {
//       stop("walkRight");
//       stop("runRight");
//     },
//     toggleRun: () => {
//       if (isInLogicQueue("walkUp")) {
//         stop("walkUp");
//         moveActions.digital.runUp();
//       }
//       if (isInLogicQueue("walkLeft")) {
//         stop("walkLeft");
//         moveActions.digital.runLeft();
//       }
//       if (isInLogicQueue("walkRight")) {
//         stop("walkRight");
//         moveActions.digital.runRight();
//       }
//       if (isInLogicQueue("walkDown")) {
//         stop("walkDown");
//         moveActions.digital.runDown();
//       }
//     },
//     toggleWalk: () => {
//       if (isInLogicQueue("runUp")) {
//         stop("runUp");
//         moveActions.digital.walkUp();
//       }
//       if (isInLogicQueue("runLeft")) {
//         stop("runLeft");
//         moveActions.digital.walkLeft();
//       }
//       if (isInLogicQueue("runRight")) {
//         stop("runRight");
//         moveActions.digital.walkRight();
//       }
//       if (isInLogicQueue("runDown")) {
//         stop("runDown");
//         moveActions.digital.walkDown();
//       }
//     },
//   },
// };

// export const movePlayerDigital = (walkAnimation: (direction: string) => void) => {
//   return (
//     directionX?: "left" | "right",
//     directionY?: "up" | "down",
//     isRunning?: boolean
//   ) => {
//     const keySpeed = isRunning ? "run" : "walk";
//     const keyDirection = (() => {
//       if (directionX && !directionY) return toTitleCase(directionX);
//       if (!directionX && directionY) return toTitleCase(directionY);
//       if (directionX && directionY)
//         return `${toTitleCase(directionX)}${toTitleCase(directionY)}`;
//     })();
//     const key = keySpeed + keyDirection as keyof typeof moveActions.digital;

//     moveActions.digital[key]();

//     // Update player's position visually using GPU
//     const directionKey = (() => {
//       if (directionX && directionY)
//         return `${directionX}${directionY[0].toUpperCase()}${directionY.slice(
//           1
//         )}`;
//       if (directionX && !directionY) return directionX;
//       if (directionX && !directionY) return directionY;
//     })();
//     walkAnimation(directionKey);
//   };
// };

// export const stopPlayerDigital = (walkStopAnimation: () => void) => {
//   return (
//     directionX?: "left" | "right",
//     directionY?: "up" | "down",
//     isRunning?: boolean
//   ) => {
//     // Stop updating the player's position visually using GPU
    
//     // ...

//     // Update player's position visually using GPU
//     walkStopAnimation();
//   };
// };