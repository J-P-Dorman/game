import THREE from "three";
import Keyboard from "./components/Keyboard/Keyboard";
import { default as Gamepad, default as Mouse } from "./components/Mouse/Mouse";
import Touch from "./components/Touch/Touch";

const Controls = () => {
  const load = ({ camera }: { camera: THREE.OrthographicCamera }) => {
    Keyboard({ camera });
    Mouse({ camera });
    Gamepad({ camera });
    Touch({ camera });
  };

  const start = () => {};

  return { load, start };
};

export default Controls;
