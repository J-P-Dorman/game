import THREE from "three";
import { CameraDebug } from "./components/CameraDebug/CameraDebug";
import ControlsDebug from "./components/ControlsDebug/ControlsDebug";

const Debug = () => {
  const cameraDebug = CameraDebug();
  const controlsDebug = ControlsDebug();

  // Load
  // ========================
  const load = ({
    scene,
    debugEl,
  }: {
    scene: THREE.Scene;
    debugEl: HTMLElement;
  }) => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "PageUp") {
        debugEl.classList.add("active");
        const { canvas } = start({ scene, debugEl });
        canvas.oncontextmenu = () => false;
      }
    });
  };

  // Start
  // ========================
  const start = ({
    scene,
    debugEl,
  }: {
    scene: THREE.Scene;
    debugEl: HTMLElement;
  }) => {
    const renderer = new THREE.WebGLRenderer();
    const windowWidth = debugEl.offsetWidth;
    const windowHeight = debugEl.offsetHeight;
    const canvas = renderer.domElement;

    const { camera } = cameraDebug.start({
      windowWidth,
      windowHeight,
    });
    controlsDebug.start({ camera });

    renderer.setSize(windowWidth, windowHeight);
    debugEl.appendChild(canvas);
    function animate() {
      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);

    return { camera, canvas };
  };

  return { load, start };
};

export default Debug;
