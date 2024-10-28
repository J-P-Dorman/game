import { playerData } from "../../data/creatureData";
import { BaseAction, CreatureData } from "../../types";
import { initEntity } from "../../utils";

const Player = () => {
  const render = () => {
    const playerContainerEl = document.createElement("div");
    playerContainerEl.id = "player-container";

    initEntity({
      entity: playerData,
      parentElement: playerContainerEl,
    });

    return playerContainerEl;
  };

  return render();
};

export default Player;
