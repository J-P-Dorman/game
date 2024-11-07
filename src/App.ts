import Controls from "./components/Controls/Controls";
import { update, fixedUpdate } from "./components/Core/Core";
import { Game } from "./components/Game/Game";
import { mapStart } from "./data/mapData";
import "./index.scss";
import * as THREE from "three";
import { createCamera } from "./test/camera";
import { createCity } from "./test/city";

const App = () => {
  window.state = {
    paused: false,
    actionQueue: [],
    updateQueue: [],
    paintHistory: {
      player: [],
      shoreUp: 0,
      shoreUpLeft: 0,
    },
    gameSize: {
      width: 0,
      height: 0,
    },
    x: 0,
    y: 0,
  };

  // const rootEl = document.querySelector("#root") as HTMLDivElement;

  // const {
  //   gameContainerEl,
  //   chunkContainerEl,
  //   playerContainerEl,
  //   pauseContainerEl,
  // } = Game({ rootEl, mapData: mapStart });

  // update(10);
  // fixedUpdate();

  // Controls({ pauseContainerEl, chunkContainerEl });

  const createScene = () => {
    const gameWindow = document.getElementById("root");
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x777777);

    const { camera, onMouseDown, onMouseMove, onMouseUp } =
      createCamera(gameWindow);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(gameWindow.offsetWidth, gameWindow.offsetHeight);
    gameWindow.appendChild(renderer.domElement);

    let meshes = [];

    const initialize = (city: any) => {
      console.log("cityy:", city);
      scene.clear();
      meshes = [];

      for (let x = 0; x < city.size; x++) {
        const column: any[] = [];
        for (let y = 0; y < city.size; y++) {
          const geometry = new THREE.BoxGeometry(1, 1, 1);
          const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
          const mesh = new THREE.Mesh(geometry, material);

          console.log("scene: ", scene);

          mesh.position.set(x, 0, y);
          scene.add(mesh);
          column.push(mesh);
        }
        meshes.push(column);
      }

      console.log("meshes:", meshes);
    };

    const start = () => {
      renderer.setAnimationLoop(draw);
    };

    const stop = () => {
      renderer.setAnimationLoop(null);
    };

    const draw = () => {
      renderer.render(scene, camera);
      // mesh.rotation.x += 0.01;
      // mesh.rotation.y += 0.01;
    };

    return { initialize, start, stop, onMouseUp, onMouseDown, onMouseMove };
  };

  ////======================================================================
  window.onload = () => {
    const scene = createScene();
    const city = createCity(8);

    scene.initialize(city);
    window.scene = scene;

    document.addEventListener("mousedown", window.scene.onMouseDown);
    document.addEventListener("mouseup", window.scene.onMouseUp);
    document.addEventListener("mousemove", window.scene.onMouseMove);
    window.scene.start();

    // Disable right click menu on the canvas
    document.querySelector("canvas").oncontextmenu = () => false;
  };
};

export default App;
