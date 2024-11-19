import { initEntity } from "../../../../utils";
import { playerData } from "../../../../data/creatureData";

const Player = () => {
  const load = () => {
    const playerContainerEl = document.createElement("div");
    playerContainerEl.id = "player-container";

    initEntity({
      entity: playerData,
      parentElement: playerContainerEl,
    });

    return playerContainerEl;
  };

  const start = () => {};

  return { load, start };
};

export default Player;
