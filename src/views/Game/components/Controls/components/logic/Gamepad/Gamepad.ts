import * as THREE from "three";

interface Props {
  camera: THREE.OrthographicCamera;
}

const Gamepad = ({ camera }: Props) => {
  const onGamepadConnected = (event: Event) => {
    const gamepads = navigator.getGamepads();

    // Clear all existing logicQueue and renderQueue actions for gamepad

    gamepads.forEach((gamepad) => {
      const buttons = gamepad?.buttons ?? [];

      buttons.forEach((button) => {
        // Get button mappings
        // Set up actions for each button
      });
    });
  };

  document.addEventListener("gamepadconnected", onGamepadConnected);
};

export default Gamepad;
