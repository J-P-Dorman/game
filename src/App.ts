import "./index.scss";
import { State } from "./types";
import Debug from "./views/Debug/Debug";
import { createRenderAction, dispatchRender } from "./views/Game/components/GameLoops/RenderLoop/utils";
import { Game } from "./views/Game/Game";
import Stats from 'three/addons/libs/stats.module.js';
import iconCode from './assets/icons/code.svg';

const App = () => {
  window.state = {
    fps: 120,
    paused: false,
    logicQueue: [],
    renderQueue: [],
    paintHistory: {
      player: [],
      shoreUp: 0,
      shoreUpLeft: 0,
    },
    gameSize: {
      width: 0,
      height: 0,
    },
    player: {
      position: {
        x: 0,
        y: 0,
      },
      direction: 'down',
      isWalking: false,
      isRunning: false
    },
    items: {},
    creatures: {},
    flags: {
      isInDialogue: false,
      hasSpokenToSarah: false
    }
  };

  window.onload = () => {
    const gameEl = document.querySelector("div#root") as HTMLDivElement;
    const debugEl = document.querySelector("div#debug") as HTMLDivElement;

    const stats = new Stats();
    gameEl.appendChild(stats.dom);

    dispatchRender(createRenderAction({
      id: "stats",
      func: () => {
        stats.update();
      },
      repeat: true,
      stack: false
    }))


    const game = Game();
    const debug = Debug();

    const { scene } = game.load({ gameEl });
    debug.load({ scene, debugEl });

    // Game has loaded and painted, start the game
    game.start({ gameEl });

    const fab = document.createElement('a');
    fab.id = "fab";
    fab.href = "https://github.com/J-P-Dorman/game";
    fab.target = "_blank";
    fab.innerHTML = `<img src="${iconCode}" />` +
    '<span>See code...</span>';
    document.querySelector('body').appendChild(fab);
  };
};

export default App;
