import THREE from "three";
import { mapStart } from "../../data/mapData";
import { getElementSize } from "../../utils";
import { Camera } from "./components/Camera/Camera";
import Controls from "./components/Controls/Controls";
import LogicLoop from "./components/GameLoops/LogicLoop/LogicLoop";
import RenderLoop from "./components/GameLoops/RenderLoop/RenderLoop";
import PauseMenu from "./components/PauseMenu/PauseMenu";
import Player from "./components/Player/Player";
import WorldMap from "./components/WorldMap/WorldMap";
import { disableRightClick } from "./helpers";

export const Game = (): any => {
  const worldMap = WorldMap();
  const camera = Camera();
  const controls = Controls();
  const logicLoop = LogicLoop();
  const renderLoop = RenderLoop();
  const player = Player();
  const pauseMenu = PauseMenu();

  const load = ({ gameEl }: { gameEl: HTMLDivElement }) => {
    const [gameWidth, gameHeight] = getElementSize(gameEl);

    // Start Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x212121);

    // Start renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(gameWidth, gameHeight);

    // Start canvas
    const canvas = renderer.domElement;
    gameEl.appendChild(canvas);
    disableRightClick(canvas);

    // TEMP axes helper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    axesHelper.rotation.x = Math.PI / 2;

    // Create game map
    worldMap.load({ scene, mapData: mapStart });

    // Add a camera to the scene
    const { camera: cameraObj } = camera.load({ x: 40, z: 42 }, gameEl);
    scene.add(cameraObj);

    // Start input controls
    controls.load({ camera: cameraObj });

    // Start the core game loops
    logicLoop.start();
    renderLoop.start({ renderer, scene, camera: cameraObj });

    player.load();
    pauseMenu.load();

    return { scene };
  };

  const start = ({ gameEl }: { gameEl: HTMLDivElement }) => {
    worldMap.animate();
  };

  return { load, start };
};
