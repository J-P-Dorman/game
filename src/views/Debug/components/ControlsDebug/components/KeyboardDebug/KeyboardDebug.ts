import * as THREE from "three";

export const KeyboardDebug = () => {
  let cameraLocal: THREE.PerspectiveCamera = undefined;

  const onKeyDownDebug = (event: KeyboardEvent) => {
    if (event.key === "w") {
      var direction = new THREE.Vector3();
      cameraLocal.getWorldDirection(direction);
      cameraLocal.position.add(direction.multiplyScalar(1));
    }
    if (event.key === "s") {
      var direction = new THREE.Vector3();
      cameraLocal.getWorldDirection(direction);
      cameraLocal.position.add(direction.multiplyScalar(-1));
    }
  };

  const start = ({ camera }: { camera: THREE.PerspectiveCamera }) => {
    // Need to create local variable because passing arguments causes issues
    // with removeEventListener. Parent component doesn't need to care.
    cameraLocal = camera;

    document.addEventListener("keydown", onKeyDownDebug);
  };

  const stop = () => {
    document.removeEventListener("keydown", onKeyDownDebug);
  };

  return { start, stop };
};

export default KeyboardDebug;
