import * as THREE from "three";
import { levels } from "../../data/levels";
import { getElementSize } from "../../utils";
import { Camera } from "./components/Camera/Camera";
import Controls from "./components/Controls/Controls";
import Dialogue from "./components/Dialogue/Dialogue";
import LogicLoop from "./components/GameLoops/LogicLoop/LogicLoop";
import { logicNow } from "./components/GameLoops/LogicLoop/utils";
import RenderLoop from "./components/GameLoops/RenderLoop/RenderLoop";
import PauseMenu from "./components/PauseMenu/PauseMenu";
import Player from "./components/Player/Player";
import WorldMap from "./components/WorldMap/WorldMap";
import { disableRightClick } from "./helpers";

export const Game = (): any => {
  // Components
  // ===========================================================================
  const worldMap = WorldMap();
  const camera = Camera();
  const controls = Controls();
  const logicLoop = LogicLoop();
  const renderLoop = RenderLoop();
  const player = Player();
  const pauseMenu = PauseMenu();

  // Methods
  // ===========================================================================
  const load = ({ gameEl }: { gameEl: HTMLDivElement }) => {
    const [gameWidth, gameHeight] = getElementSize(gameEl);

    // Start Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x212121);

    // DELETE ME - Only exists for testing
    window.scene = scene;

    // Start renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(gameWidth, gameHeight);

    // Start canvas
    const canvas = renderer.domElement;
    gameEl.appendChild(canvas);
    disableRightClick(canvas);

    // TEMP axes helper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    axesHelper.rotation.x = Math.PI / 2;

    // Add a camera to the scene
    const { camera: cameraObj } = camera.load(gameEl);
    scene.add(cameraObj);
    logicNow(camera.logicActions.cameraSnap, [40, -42]);

    // Create game map
    // TODO: choose a level to load dynamically
    worldMap.load({
      scene,
      levelData: levels.tutorialIsland,
      attachToCamera: camera.attachToCamera,
      fitToCamera: camera.fitToCamera
    });

    // Start input controls
    controls.load({ camera: cameraObj });

    // Start the core game loops
    logicLoop.start();
    renderLoop.start({ renderer, scene, camera: cameraObj });

    player.load({ attachToCamera: camera.attachToCamera });
    pauseMenu.load();

    return { scene };
  };

  const start = ({ gameEl }: { gameEl: HTMLDivElement }) => {
    worldMap.animate();

    controls.start(
      { ...player.logicActions, ...camera.logicActions },
      { ...player.renderActions, ...camera.renderActions }
    );
  };

  return { load, start };
};
