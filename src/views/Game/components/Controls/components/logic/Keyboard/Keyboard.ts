import { decideAction } from "./data";

type KeyboardEventCallback = (event: KeyboardEvent) => void;

const Keyboard = () => {
  let allPressedKeys: string[] = [];
  let saveOnKeyDown: KeyboardEventCallback = () => {};
  let saveOnKeyUp: KeyboardEventCallback = () => {};

  const start = (
    logicActions: Record<string, any>,
    renderActions: Record<string, any>
  ) => {
    const onKeyDown = (event: KeyboardEvent) => {
      const { key, shiftKey } = event;
      const keyLower = key.toLowerCase();

      decideAction(
        keyLower,
        shiftKey,
        true,
        allPressedKeys,
        logicActions,
        renderActions
      );

      // Don't stack multiple of the same key for easy chronology
      if (!allPressedKeys.includes(keyLower)) allPressedKeys.push(keyLower);
    };

    const onKeyUp = (event: KeyboardEvent) => {
      const { key } = event;
      const keyLower = key.toLowerCase();

      allPressedKeys = allPressedKeys.filter(
        (pressedKey) => pressedKey !== keyLower
      );
      decideAction(
        keyLower,
        false,
        false,
        allPressedKeys,
        logicActions,
        renderActions
      );
    };

    // Save functions to parent scope so we can removeEventListener later
    saveOnKeyDown = onKeyDown;
    saveOnKeyUp = onKeyUp;

    document.addEventListener("keydown", saveOnKeyDown);
    document.addEventListener("keyup", saveOnKeyUp);
  };

  const stop = () => {
    document.removeEventListener("keydown", saveOnKeyDown);
    document.removeEventListener("keyup", saveOnKeyUp);
  };

  return { start, stop };
};

export default Keyboard;
