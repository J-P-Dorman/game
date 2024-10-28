import { MapData } from "../../types";
import Player from "../Player/Player";
import PauseMenu from "../PauseMenu/PauseMenu";
import WorldMap from "../WorldMap/WorldMap";

type GetGameSize = (props: { gameContainerEl: HTMLDivElement }) => {
  width: number;
  height: number;
};
export const getGameSize: GetGameSize = ({ gameContainerEl }) => ({
  width: gameContainerEl.offsetWidth,
  height: gameContainerEl.offsetHeight,
});

export const Game = ({
  rootEl,
  mapData,
}: {
  rootEl: HTMLDivElement;
  mapData: MapData;
}): Record<string, HTMLDivElement> => {
  const gameContainerEl = document.createElement("div");
  gameContainerEl.id = "game-container";
  rootEl.appendChild(gameContainerEl);

  const gameEl = document.createElement("div");
  gameEl.id = "game";

  const { width, height } = getGameSize({ gameContainerEl });

  const chunkContainerEl = WorldMap({
    mapData,
    gameWidth: width,
    gameHeight: height,
  });
  const playerContainerEl = Player();
  const pauseContainerEl = PauseMenu();

  gameEl.appendChild(chunkContainerEl);
  gameEl.appendChild(playerContainerEl);
  gameEl.appendChild(pauseContainerEl);
  gameContainerEl.appendChild(gameEl);

  return {
    gameContainerEl,
    gameEl,
    chunkContainerEl,
    playerContainerEl,
    pauseContainerEl,
  };
};
