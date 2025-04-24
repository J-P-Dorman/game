import {
  LogicActionList
} from "../GameLoops/LogicLoop/types";
import { RenderActionList } from "../GameLoops/RenderLoop/types";
import Keyboard from "./components/logic/Keyboard/Keyboard";
import { default as Gamepad, default as Mouse } from "./components/logic/Mouse/Mouse";
import Touch from "./components/logic/Touch/Touch";

const Controls = () => {
  // Components
  // ===========================================================================
  const keyboard = Keyboard();
  const mouse = Mouse();
  const touch = Touch();
  const gamepad = Gamepad();

  // Methods
  // ===========================================================================
  const start = (
    logicActions: LogicActionList,
    renderActions: RenderActionList
  ) => {
    keyboard.start(logicActions, renderActions);
    mouse.start();
    gamepad.start();
    touch.start();
  };

  const stop = () => {
    keyboard.stop();
  };

  return { start, stop };
};

export default Controls;
