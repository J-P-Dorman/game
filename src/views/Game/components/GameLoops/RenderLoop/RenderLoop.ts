import * as THREE from "three";
import { renderFrame } from "./helpers";

/**
 * This function is used to output to screen, DO NOT do any logic here
 */
const RenderLoop = () => {
  const clock = new THREE.Clock();
  let delta = 0;
  let isRendering = false;

  const start = ({
    renderer,
    scene,
    camera,
  }: {
    renderer: any;
    scene: any;
    camera: THREE.OrthographicCamera;
  }) => {
    /**
     * Loop and constantly check if it's time to render a frame
     */
    const renderLoop = () => {
      const { renderQueue, fps } = window.state;
      const interval = 1 / fps;

      delta += clock.getDelta();

      if (delta > interval) {
        const shouldSkipFrame = isRendering === true;

        isRendering = true;

        // If the previous frame is still processing, drop this frame
        if (!shouldSkipFrame) renderFrame(renderQueue, renderer, scene, camera, fps);

        delta = delta % interval;

        isRendering = false;
      }

      requestAnimationFrame(renderLoop);
    };

    renderLoop();
  };

  return { start };
};

export default RenderLoop;
