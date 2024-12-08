import THREE from "three";
import KeyboardDebug from "./components/KeyboardDebug/KeyboardDebug";
import MouseDebug from "./components/MouseDebug/MouseDebug";

export const ControlsDebug = () => {
  const keyboardDebug = KeyboardDebug();
  const mouseDebug = MouseDebug();

  const start = ({ camera }: { camera: THREE.PerspectiveCamera }) => {
    keyboardDebug.start({ camera });
    mouseDebug.start({ camera });
  };

  return { start };
};

export default ControlsDebug;
