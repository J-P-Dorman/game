import * as THREE from "three";
import { State } from "./types";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { loadFont } from "../../../../../../utils";

const DialogueText = () => {
  const state: State = {
    textMesh: undefined,
    letterPause: 20,
    wordPause: 50
  };

  // Private Methods
  // ===========================================================================

  // Public Methods
  // ===========================================================================
  const load = async ({ color, size }: { color: string, size: number }) => {
    const font = await loadFont("fonts/Roboto_Regular.json");

    const myText = 'Hello world, this is some long text that needs to line break';

    const textGeometry = new TextGeometry(myText, {
      font,
      size,
      depth: 0.1,
      curveSegments: 5
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color });
    state.textMesh = new THREE.Mesh(textGeometry, textMaterial);

    return state.textMesh;
  };

  const startText = () => {
    
  };

  const speedUpText = () => {
    state.letterPause = 8;
    state.wordPause = 20;
  };

  return { load };
};

export default DialogueText;
