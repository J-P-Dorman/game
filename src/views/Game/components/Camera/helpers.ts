import * as THREE from "three";

export const updateCameraPosition = (
  camera: THREE.OrthographicCamera,
  startPosition: { x: number; z: number }
) => {
  //camera.position.set(30, 10, 30); // Offset in both z and x directions for better view
  camera.position.set(startPosition.x, 10, startPosition.z); // Offset in both z and x directions for better view
  camera.lookAt(startPosition.x, 0, startPosition.z);
  camera.updateMatrix();
};
