import * as THREE from "three";

export const updateCameraPosition = (camera: THREE.PerspectiveCamera) => {
  camera.updateMatrix();
};
