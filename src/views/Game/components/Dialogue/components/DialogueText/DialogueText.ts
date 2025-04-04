import * as THREE from "three";
import { State } from "./types";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { forIncrement, loadFont } from "../../../../../../utils";
import { DialogueOption } from "../../../../../../data/creatures/types";
import { createRenderAction, dispatchRender, removeAllFromRenderQueue2 } from "../../../GameLoops/RenderLoop/utils";
import { removeAllFromLogicQueue2 } from "../../../GameLoops/LogicLoop/utils";
import fontFamily from '../../../../../../assets/fonts/Reddit_Mono_Regular.json'

const DialogueText = () => {
  const state: State = {
    text: undefined,
    color: '#000000',
    fontSize: 1,
    font: undefined,
    containerSize: 0,
    clock: undefined,
    textGroup: new THREE.Group(),
    letterMeshes: [],
    letterPause: 5,
    letterIndex: 0
  };

  // Private Methods
  // ===========================================================================
  const delay = (time: number) => new Promise(response => setTimeout(response, time));
  
  const renderLetter = (
    letter: string,
    x: number,
    y: number,
    font: any,
    size: number,
    color: string
  ) => {
    const letterGeometry = new TextGeometry(letter, {
      font,
      size,
      depth: 0.1,
      curveSegments: 5,
    });
    const letterMaterial = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
    });
    const letterMesh = new THREE.Mesh(letterGeometry, letterMaterial);

    letterMesh.position.x = x * size;
    letterMesh.position.y = -y;

    letterMesh.visible = false;

    state.textGroup.add(letterMesh);
    state.letterMeshes = [...state.letterMeshes, letterMesh];
  };

  const loadText = async (
    text: string,
    font: any,
    color: string,
    size: number,
    containerSize: number
  ) => {
    const lettersPerLine = containerSize / size - 7 / size;
    const words = text.split(" ").map((word) => `${word} `);
    const lineGap = 1.3;

    // Turn long text into lines that fit on the current screen size
    // wrap words to the next line
    const lines: string[][] = (() => {
      let currentLine = 0;
      return words.reduce((acc, word) => {
        const lineIsFull =
          (acc[currentLine] ?? []).join("").length > lettersPerLine;
        if (lineIsFull) currentLine += 1;

        const newValue = [...acc];
        if (!newValue[currentLine]) newValue[currentLine] = [];
        newValue[currentLine] = [...newValue[currentLine], word];
        return newValue;
      }, []);
    })();

    lines.forEach((line, lineIndex) => {
      let lettersThisLine = 0;
      line.forEach((word, wordIndex) => {
        word.split("").forEach((letter, letterIndex) => {
          lettersThisLine += 1;
          renderLetter(
            letter,
            lettersThisLine,
            lineIndex * lineGap,
            font,
            size,
            color
          );
        });
      });
    });

    return true;
  };

  // Public Methods
  // ===========================================================================
  const load = async ({
    color,
    fontSize,
    containerSize,
  }: {
    color: string;
    fontSize: number;
    containerSize: number;
  }) => {
    state.color = color;
    state.fontSize = fontSize;
    state.containerSize = containerSize;

    const font = await loadFont(fontFamily);
    state.font = font;

    return state.textGroup;
  };

  const write = ({text}: { text: string; }) => {
    clear();

    // Removing timeout causes race condition with previous
    // showLetter action in render queue
    setTimeout(() => {
      state.clock = new THREE.Clock();
      state.text = text;
  
      dispatchRender(renderActions.updateText);
      dispatchRender(renderActions.showLetter);
    }, 20);
  };

  const clear = () => {
    removeAllFromRenderQueue2([{ id: 'showLetter' }]);
    
    state.textGroup.clear();
    state.letterMeshes = [];
    state.text = '';
    state.letterIndex = 0;
  };

  const hide = () => {
    state.textGroup.visible = false;
    clear();
  }

  const speedUpText = () => {
    state.letterPause = 3;
  };

  const showLetter = async (index: number, delta: number) => {
    // If there's no next letter, stop
    if (!state.letterMeshes[index]) return;

    // Wait for a bit so the text doesn't slam in together
    await delay(state.letterPause);

    // Figure out what letters should be there by now
    // The promise could take longer than specified based on cpu load
    // So make sure the correct number of letters get rendered each cycle
    const newDelta = delta;
    const letterCount = Math.ceil(delta / state.letterPause);
    const startIndex = index;
    const endIndex = index + letterCount;
    
    // Render the letters
    for(let i = startIndex; i <= endIndex; i++) {
      if(!state.letterMeshes[i]) break;
      state.letterMeshes[i].visible = true;
    }
  };

  const renderActions = {
    updateText: createRenderAction({
      id: 'updateText',
      func: () => {
        loadText(
          state.text,
          state.font,
          state.color,
          state.fontSize,
          state.containerSize
        );
      },
      stack: false
    }),
    showLetter: createRenderAction({
      id: 'showLetter',
      func: () => {
        showLetter(state.letterIndex, state.clock.getDelta());
        state.letterIndex += 1;
      },
      maxTime: state.letterPause,
      stack: false,
      repeat: () => state.text[state.letterIndex] !== undefined
    })
  }

  return { load, write, clear, hide };
};

export default DialogueText;
