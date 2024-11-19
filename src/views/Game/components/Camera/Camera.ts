import * as THREE from "three";
import { updateCameraPosition } from "./helpers";

export const Camera = () => {
  const load = (
    startPosition: { x: number; z: number },
    gameWindow: HTMLElement
  ) => {
    const width = gameWindow.offsetWidth;
    const height = gameWindow.offsetHeight;
    const aspect = width / height;

    const zoom = 10; // Controls how zoomed-in/out the orthographic view is
    const left = -zoom * aspect;
    const right = zoom * aspect;
    const top = zoom;
    const bottom = -zoom;

    const camera = new THREE.OrthographicCamera(
      left,
      right,
      top,
      bottom,
      0.1,
      1000
    );

    updateCameraPosition(camera, startPosition);

    return { camera };
  };

  const start = () => {};

  return { load, start };
};
