import * as THREE from "three";
import { Load, State } from "./types";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

// DELETE MEEEEEEEEEEEEEEEEEEEEE
const DialogueBox = () => {
  const state: State = {
    dialogueBoxGroup: new THREE.Group(),
    textGroup: new THREE.Group(),
    textQueue: [],
  };

  // Private Methods
  // ===========================================================================
  const createBackgroundMesh = (config: { fill: string; text: string }) => {
    const backgroundMaterial = new THREE.MeshBasicMaterial({
      color: config?.fill,
      transparent: true,
    });
    backgroundMaterial.opacity = 0.8;
    const backgroundGeometry = new THREE.PlaneGeometry(1, 1);
    const backgroundMesh = new THREE.Mesh(
      backgroundGeometry,
      backgroundMaterial
    );
    backgroundMesh.position.z = -0.1;

    return backgroundMesh;
  };

  const loadFont = async (): Promise<any> => {
    const loader = new FontLoader();

    return new Promise((resolve) => {
      loader.load("fonts/Roboto_Regular.json", (response) => {
        resolve(response);
      });
    });
  };

  // Public Methods
  // ===========================================================================
  const load = async ({ config }: Load) => {
    window.scene.updateMatrixWorld(true);
    const backgroundMesh = createBackgroundMesh(config);

    state.dialogueBoxGroup.add(backgroundMesh);
    state.dialogueBoxGroup.add(state.textGroup);

    const font = await loadFont();
    console.log("font: ", font);
    const textGeometry = new TextGeometry("Hello World", {
      font,
      size: 0.1,
      depth: 0.01,
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff" });

    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    // textMesh.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);

    // window.scene.add(textMesh);
    state.textGroup.add(textMesh);
    textMesh.position.z = -0.1;

    // Position copying test
    // =================================================================
    // state.dialogueBoxGroup.position.set(2, 1, 1);

    const lol = state.dialogueBoxGroup.getWorldPosition(new THREE.Vector3());

    console.log("lol: ", lol.x);

    console.log("x: ", lol.x);
    console.log("y: ", lol.y);
    console.log("z: ", lol.z);
    // =================================================================

    return { dialogueBoxGroup: state.dialogueBoxGroup };
  };

  const startText = ({ config }: Load) => {};

  return { load };
};

export default DialogueBox;
