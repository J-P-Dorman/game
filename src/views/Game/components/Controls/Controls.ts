import * as THREE from "three";
import {
  LogicActionList
} from "../GameLoops/LogicLoop/types";
import { RenderActionList } from "../GameLoops/RenderLoop/types";
import Keyboard from "./components/Keyboard/Keyboard";
import { default as Gamepad, default as Mouse } from "./components/Mouse/Mouse";
import Touch from "./components/Touch/Touch";

const Controls = () => {
  // Components
  // ===========================================================================
  const keyboard = Keyboard();

  // Methods
  // ===========================================================================
  const load = ({ camera }: { camera: THREE.OrthographicCamera }) => {
    Mouse({ camera });
    Gamepad({ camera });
    Touch({ camera });
  };

  const start = (
    logicActions: LogicActionList,
    renderActions: RenderActionList
  ) => {
    keyboard.start(logicActions, renderActions);
  };

  const stop = () => {
    keyboard.stop();
  };

  return { load, start, stop };
};

export default Controls;
