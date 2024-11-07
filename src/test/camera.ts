import * as THREE from "three";

export const createCamera = (gameWindow: HTMLElement) => {
  // const DEG2RAD = Math.PI / 2;
  const DEG2RAD = Math.PI / 180;

  const updateCameraPosition = () => {
    camera.position.x =
      cameraRadius *
      Math.sin(cameraAzimuth * DEG2RAD) *
      Math.cos(cameraElevation * DEG2RAD);
    camera.position.y = Math.sin(cameraElevation * DEG2RAD);
    camera.position.z =
      cameraRadius *
      Math.cos(cameraAzimuth * DEG2RAD) *
      Math.cos(cameraElevation * DEG2RAD);
    camera.position.add(cameraOrigin);
    camera.lookAt(0, 0, 0);
    camera.updateMatrix();
  };

  const Y_AXIS = new THREE.Vector3(0, 1, 0);
  const camera = new THREE.PerspectiveCamera(
    75,
    gameWindow.offsetWidth / gameWindow.offsetHeight,
    0.1,
    1000
  );

  const MIN_CAMERA_RADIUS = 2;
  const MAX_CAMERA_RADIUS = 100;
  const MIN_CAMERA_ELEVATION = 0;
  const MAX_CAMERA_ELEVATION = 90;

  let cameraOrigin = new THREE.Vector3();
  let cameraRadius = 4;
  let cameraAzimuth = 0;
  let cameraElevation = 0;

  let prevMouseX = 0;
  let prevMouseY = 0;

  let isMouseDownLeft = false;
  let isMouseDownMiddle = false;
  let isMouseDownRight = false;

  updateCameraPosition();

  const MOUSE_BUTTON_LEFT = 0;
  const MOUSE_BUTTON_MIDDLE = 1;
  const MOUSE_BUTTON_RIGHT = 2;

  const withinBounds = (min: number, max: number, value: number) =>
    Math.min(max, Math.max(min, value));

  const onMouseDown = (event: any) => {
    event.preventDefault();

    console.log(event.button);

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

  const onMouseUp = (event: any) => {
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

  const onMouseMove = (event: any) => {
    const deltaX = event.movementX - prevMouseX;
    const deltaY = event.movementY - prevMouseY;

    // Handle camera rotation
    if (isMouseDownLeft) {
      cameraAzimuth += -(deltaX * 0.5);
      cameraElevation += deltaY * 0.5;
      cameraElevation = withinBounds(
        MIN_CAMERA_ELEVATION,
        MAX_CAMERA_ELEVATION,
        cameraElevation
      );
      updateCameraPosition();
    }

    // Handle camera zoom
    if (isMouseDownRight) {
      cameraRadius += deltaY * 0.02;
      cameraRadius = withinBounds(
        MIN_CAMERA_RADIUS,
        MAX_CAMERA_RADIUS,
        cameraRadius
      );
      updateCameraPosition();
    }

    // Handle camera pan
    if (isMouseDownMiddle) {
      const forward = new THREE.Vector3(0, 0, 1).applyAxisAngle(
        Y_AXIS,
        cameraAzimuth * DEG2RAD
      );
      const left = new THREE.Vector3(1, 0, 0).applyAxisAngle(
        Y_AXIS,
        cameraAzimuth * DEG2RAD
      );

      cameraOrigin.add(forward.multiplyScalar(-0.01 * deltaY));
      cameraOrigin.add(left.multiplyScalar(-0.01 * deltaX));
      updateCameraPosition();
    }
  };

  return { camera, onMouseUp, onMouseDown, onMouseMove };
};
