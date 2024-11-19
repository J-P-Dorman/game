import THREE from "three";
import { RenderActionAny } from "./types";

/**
 * Run the whole render queue, update it, then visually render the frame
 */
export const renderFrame = (
  renderQueue: RenderActionAny[],
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: THREE.Camera
) => {
  const newRenderQueue = renderQueue.reduce((acc: any[], action: any) => {
    const { func, repeat } = action;

    func({ action, renderQueue });

    if (repeat) return [...acc, action];
    return acc;
  }, []);

  window.state.renderQueue = newRenderQueue;

  renderer.render(scene, camera);
};
