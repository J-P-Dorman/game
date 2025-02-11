import * as THREE from "three";
import { State } from "./types";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { forIncrement, loadFont } from "../../../../../../utils";

const DialogueText = () => {
  const state: State = {
    textGroup: new THREE.Group(),
    letterMeshes: [],
    letterPause: 40,
    wordPause: 50,
  };

  // Private Methods
  // ===========================================================================
  const delay = (time: number) => new Promise(response => setTimeout(response, time));

  const reveal = () => {
    const clock = new THREE.Clock();

    window.addEventListener('keydown', () => { state.letterPause =  0.7 })

    const showLetter = async (index: number, delta: number) => {
      // If there's no next letter, stop
      if (!state.letterMeshes[index]) return;
  
      // Wait for a bit so the text doesn't slam in together
      await delay(state.letterPause);

      // Figure out what letters should be there by now
      // The promise could take longer than specified based on cpu load
      // So make sure the correct number of letters get rendered each cycle
      const newDelta = delta + clock.getDelta();
      const letterCount = Math.ceil(delta / state.letterPause);
      const startIndex = index;
      const endIndex = index + letterCount;
      
      // Render the letters
      for(let i = startIndex; i <= endIndex; i++) {
        if(!state.letterMeshes[i]) break;
        state.letterMeshes[i].visible = true;
      }

      // Keep looping
      showLetter(endIndex, newDelta);
    }
    
    showLetter(0, 0);
  }

  // const reveal = async () => {
  //   const showLetter = (index: number) => {

  //     if (!state.letterMeshes[index]) return;

      

  //     window.setTimeout(() => {
  //       state.letterMeshes[index].visible = true;
  //       showLetter(index + 1);
  //     }, 1);
  //   };

  //   showLetter(0);

  //   window.addEventListener('keydown', () => { state.letterPause =  1 })
  // };
  
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
    color: string,
    size: number,
    containerSize: number
  ) => {
    const font = await loadFont("fonts/Reddit_Mono_Regular.json");

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

    reveal();
  };

  // Public Methods
  // ===========================================================================
  const load = ({
    color,
    fontSize,
    containerSize,
  }: {
    color: string;
    fontSize: number;
    containerSize: number;
  }) => {
    const text =
      "Hello world, this is some long text that needs to line break. Filler text. Mary had a little lamb";
    loadText(text, color, fontSize, containerSize);

    return state.textGroup;
  };

  const startText = () => {};

  const speedUpText = () => {
    state.letterPause = 8;
    state.wordPause = 20;
  };

  return { load, reveal };
};

export default DialogueText;
