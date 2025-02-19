import * as THREE from "three";
import { RenderAction, RenderActionAny } from "./types";

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

  const newRenderQueue = renderQueue.reduce((acc: RenderAction[], action: RenderAction) => {
    const { id, func, time, maxTime, repeat } = action;
    const finalTime = typeof maxTime === "function" ? maxTime() : maxTime;
    const timeElapsed = time >= finalTime;
    const newTime = timeElapsed ? 0 : time + delay;

    if (timeElapsed) {
      const maybeVoid = func({ action, actionQueue: renderQueue });
      const funcReturn = Array.isArray(maybeVoid) ? maybeVoid : [];
      const shouldRepeat =
        typeof repeat === "function" ? repeat(funcReturn) : repeat;

      // If we should repeat throw this action back into the queue at 0 time
      if (shouldRepeat) return [...acc, { ...action, time: newTime }];

      // Clear this action from the queue
      return acc;
    }

    // Keep counting time to execution of callback
    return [...acc, { ...action, time: newTime }];
  }, []);

  window.state.renderQueue = newRenderQueue;

  renderer.render(scene, camera);
};
