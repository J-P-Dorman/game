import { CreatureData } from "../types";

export const initEntity = ({
  entity,
  startState,
  startPosition,
  parentElement,
}: {
  entity: CreatureData;
  startState?: string;
  startPosition?: any;
  parentElement: HTMLDivElement;
}): void => {
  const { id: entityId, states } = entity;
  const stateKey = startState ?? entity.defaultState;
  const state = states[stateKey];

  const entityEl = document.createElement("div");
  const stateContainerEl = document.createElement("div");
  stateContainerEl.classList.add("state-container");

  if (entity.id.includes("{X}")) {
    const className = entityId.replace("{X}", "");
    const instanceCount = document.querySelectorAll(`.${className}`).length;
    const specificId = entityId.replace("{X}", `${instanceCount}`);

    entityEl.classList.add(className);
    entityEl.id = specificId;
  } else {
    entityEl.id = entityId;
  }

  Object.entries(states).forEach(([id, state]) => {
    const { image } = state;
    const stateEl = document.createElement("div");
    stateEl.classList.add("state");
    stateEl.id = id;
    stateEl.style.backgroundImage = `url(${image})`;

    if (stateKey === id) stateEl.classList.add("active");
    stateContainerEl.appendChild(stateEl);
  });

  entityEl.appendChild(stateContainerEl);
  parentElement.appendChild(entityEl);
  window.state.paintHistory[entityId] = [{ entityId, state }];
};

// const paintPlayer = (direction: string, isWalking: boolean) => {
//   const lastPainted = window.state.lastPainted ?? {};
//   const lastReleased = window.state.lastReleased ?? undefined;
//   const turnUp =
//     direction === ("up" && !isWalking) ||
//     (direction === undefined && lastReleased === "w");
//   const turnDown =
//     direction === ("down" && !isWalking) ||
//     (direction === undefined && lastReleased === "s");
//   const turnLeft =
//     direction === ("left" && !isWalking) ||
//     (direction === undefined && lastReleased === "a");
//   const turnRight =
//     direction === ("right" && !isWalking) ||
//     (direction === undefined && lastReleased === "d");
//   const walkUp1 =
//     direction === "up" && isWalking && lastPainted.id !== "walkUp1";
//   const walkUp2 =
//     direction === "up" && isWalking && lastPainted.id === "walkUp1";
//   const walkDown1 =
//     direction === "down" && isWalking && lastPainted.id !== "walkDown1";
//   const walkDown2 =
//     direction === "down" && isWalking && lastPainted.id === "walkDown1";
//   const walkLeft1 =
//     direction === "left" && isWalking && lastPainted.id !== "walkLeft1";
//   const walkLeft2 =
//     direction === "left" && isWalking && lastPainted.id === "walkLeft1";
//   const walkRight1 =
//     direction === "right" && isWalking && lastPainted.id !== "walkRight1";
//   const walkRight2 =
//     direction === "right" && isWalking && lastPainted.id === "walkRight1";

//   const playerEl = document.createElement("img");
//   const { id, svg } = (() => {
//     if (turnUp)
//       return {
//         id: "turnUp",
//         svg: "file:///home/joe/repo/game/assets/character/up.svg",
//       };
//     if (turnDown)
//       return {
//         id: "turnDown",
//         svg: image,
//       };
//     if (turnLeft)
//       return {
//         id: "turnLeft",
//         svg: "file:///home/joe/repo/game/assets/character/left.svg",
//       };
//     if (turnRight)
//       return {
//         id: "turnRight",
//         svg: "file:///home/joe/repo/game/assets/character/right.svg",
//       };
//     if (walkDown1)
//       return {
//         id: "walkDown1",
//         svg: "file:///home/joe/repo/game/assets/character/down-walk-1.svg",
//       };
//     if (walkDown2)
//       return {
//         id: "walkDown2",
//         svg: "file:///home/joe/repo/game/assets/character/down-walk-2.svg",
//       };
//     if (walkUp1)
//       return {
//         id: "walkUp1",
//         svg: "file:///home/joe/repo/game/assets/character/up-walk-1.svg",
//       };
//     if (walkUp2)
//       return {
//         id: "walkUp2",
//         svg: "file:///home/joe/repo/game/assets/character/up-walk-2.svg",
//       };
//     if (walkLeft1)
//       return {
//         id: "walkLeft1",
//         svg: "file:///home/joe/repo/game/assets/character/left-walk.svg",
//       };
//     if (walkLeft2)
//       return {
//         id: "walkLeft2",
//         svg: "file:///home/joe/repo/game/assets/character/left.svg",
//       };
//     if (walkRight1)
//       return {
//         id: "walkRight1",
//         svg: "file:///home/joe/repo/game/assets/character/right-walk.svg",
//       };
//     if (walkRight2)
//       return {
//         id: "walkRight2",
//         svg: "file:///home/joe/repo/game/assets/character/right.svg",
//       };
//     return {
//       id: "turnDown",
//       svg: "file:///home/joe/repo/game/assets/character/down.svg",
//     };
//   })();

//   playerEl.id = "player";
//   if (playerContainerEl.childElementCount)
//     playerContainerEl.removeChild(playerContainerEl.firstChild);
//   playerEl.src = svg;
//   playerContainerEl.appendChild(playerEl);

//   window.lastPainted = { id, svg, direction, isWalking };
// };

// const turnCreature = (targetId: string, direction: string) => {
//   const { id, svg } = (() => {
//     if (targetId === "player" && direction === "up")
//       return {
//         id: "turnUp",
//         svg: "file:///home/joe/repo/game/assets/character/up.svg",
//       };
//     if (targetId === "player" && direction === "down")
//       return {
//         id: "turnDown",
//         svg: "file:///home/joe/repo/game/assets/character/down.svg",
//       };
//     if (targetId === "player" && direction === "left")
//       return {
//         id: "turnLeft",
//         svg: "file:///home/joe/repo/game/assets/character/left.svg",
//       };
//     if (targetId === "player" && direction === "right")
//       return {
//         id: "turnRight",
//         svg: "file:///home/joe/repo/game/assets/character/right.svg",
//       };
//     return {
//       id: "turnDown",
//       svg: "file:///home/joe/repo/game/assets/tree.png",
//     };
//   })();

//   if ((targetId = "player")) paintPlayer({ id, direction, isWalking, svg });
//   else paintNpc({ id, direction, isWalking, svg });
// };

export * from "./loops";
export * from "./numbers";
export * from "./elements";
