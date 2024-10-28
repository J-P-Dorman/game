import * as THREE from "three";
import { updateCameraPosition } from "./helpers";

export const CameraDebug = () => {
  const start = ({
    windowWidth,
    windowHeight,
  }: {
    windowWidth: number;
    windowHeight: number;
  }) => {
    const camera = new THREE.PerspectiveCamera(
      75,
      windowWidth / windowHeight,
      0.1,
      1000
    );
    updateCameraPosition(camera);
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 15;
    camera.lookAt(0, 0, 0);

    return { camera };
  };

  return { start };
};
