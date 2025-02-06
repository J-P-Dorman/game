import * as THREE from "three";
import {
  MOUSE_BUTTON_LEFT,
  MOUSE_BUTTON_MIDDLE,
  MOUSE_BUTTON_RIGHT,
} from "../../../../../../constants";
import { updateCameraPosition } from "../../../CameraDebug/helpers";

export const MouseDebug = () => {
  let isMouseDownLeft = false;
  let isMouseDownMiddle = false;
  let isMouseDownRight = false;
  let cameraLocal: THREE.PerspectiveCamera = undefined;

  const onMouseDownDebug = (event: MouseEvent) => {
    event.preventDefault();

    if (event.button === MOUSE_BUTTON_LEFT) {
      isMouseDownLeft = true;
    }
    if (event.button === MOUSE_BUTTON_RIGHT) {
      isMouseDownRight = true;
    }
    if (event.button === MOUSE_BUTTON_MIDDLE) {
      isMouseDownMiddle = true;
    }
  };

  const onMouseUpDebug = (event: MouseEvent) => {
    if (event.button === MOUSE_BUTTON_LEFT) {
      isMouseDownLeft = false;
    }
    if (event.button === MOUSE_BUTTON_RIGHT) {
      isMouseDownRight = false;
    }
    if (event.button === MOUSE_BUTTON_MIDDLE) {
      isMouseDownMiddle = false;
    }
  };

  const onMouseMoveDebug = (event: MouseEvent) => {
    const deltaX = event.movementX;
    const deltaY = event.movementY;

    // Handle camera rotation
    if (isMouseDownLeft) {
      if (cameraLocal) {
        cameraLocal.rotation.y += deltaX / 100;
        cameraLocal.rotation.x += deltaY / 100;
        updateCameraPosition(cameraLocal);
      }
    }

    // Handle camera zoom
    if (isMouseDownRight) {
    }

    // Handle camera pan
    if (isMouseDownMiddle) {
    }
  };

  const start = ({ camera }: { camera: THREE.PerspectiveCamera }) => {
    // Need to create local variable because passing arguments causes issues
    // with removeEventListener. Parent component doesn't need to care.
    cameraLocal = camera;

    document.addEventListener("mousedown", onMouseDownDebug);
    document.addEventListener("mouseup", onMouseUpDebug);
    document.addEventListener("mousemove", onMouseMoveDebug);
  };

  const stop = () => {
    document.removeEventListener("mousedown", onMouseDownDebug);
    document.removeEventListener("mouseup", onMouseUpDebug);
    document.removeEventListener("mousemove", onMouseMoveDebug);
  };

  return { start, stop };
};

export default MouseDebug;
