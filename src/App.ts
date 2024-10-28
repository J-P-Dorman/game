import "./index.scss";
import { Game } from "./components/Game/Game";
import Player from "./components/Player/Player";
import { initActionQueue } from "./components/Core/Core";
import Controls from "./components/Controls/Controls";
import { playerData } from "./data/creatureData";
import { mapStart } from "./data/mapData";

const App = () => {
  window.state = {
    paused: false,
    actionQueue: [],
    paintHistory: {
      player: [],
      shore: 0,
    },
    gameSize: {
      width: 0,
      height: 0,
    },
    x: 0,
    y: 0,
  };

  const rootEl = document.querySelector("#root") as HTMLDivElement;

  const {
    gameContainerEl,
    chunkContainerEl,
    playerContainerEl,
    pauseContainerEl,
  } = Game({ rootEl, mapData: mapStart });

  initActionQueue();

  Controls({ pauseContainerEl, chunkContainerEl });
};

export default App;
