import * as THREE from "three";
import { RenderActionAny } from "./types";

/**
 * Run the whole render queue, update it, then visually render the frame
 */
export const renderFrame = (
  renderQueue: RenderActionAny[],
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  fps: number
) => {
  const delay = Math.round(1000 / fps);

  const newRenderQueue = renderQueue.reduce((acc: any[], action: any) => {
    const { id, func, time, maxTime, repeat } = action;
    const timeElapsed = time >= maxTime;
    const newTime = timeElapsed ? 0 : time + delay;

    if(timeElapsed) func({ action, renderQueue });

    if (repeat) return [...acc, { ...action, time: newTime }];
    return acc;
  }, []);

  window.state.renderQueue = newRenderQueue;

  renderer.render(scene, camera);
};
