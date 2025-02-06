import { loadSvg, loadSvgSheet } from "../../../../utils/svg";
import { createLogicAction } from "../GameLoops/LogicLoop/utils";
import { createRenderAction } from "../GameLoops/RenderLoop/utils";
import * as THREE from "three";
import textBackgroundImage from "../../../../assets/sprites/scenery/house.svg";
import { FitToCamera } from "../Camera/types";
import DialogueBox from "./components/DialogueBox/DialogueBox";

type State = {
  dialogueGroup: THREE.Group;
  textGroup: THREE.Group;
  imageGroup: THREE.Group;
  image: any;
};

type Load = {
  fitToCamera: FitToCamera;
};

const Dialogue = () => {
  const state: State = {
    dialogueGroup: new THREE.Group(),
    textGroup: new THREE.Group(),
    imageGroup: new THREE.Group(),
    image: undefined,
  };

  const dialogueBox =  DialogueBox();

  // Private Methods
  // ===========================================================================

  // Public Methods
  // ===========================================================================
  const load = async ({ fitToCamera }: Load) => {

    // Attach the parts the the main container
    state.dialogueGroup.add(state.textGroup);
    state.dialogueGroup.add(state.imageGroup);

    // DELETE ME Apply test colours to groups
    // ===================================================================
    const imageMaterial = new THREE.MeshBasicMaterial({color: '#00ff00'});
    const imageGeometry = new THREE.PlaneGeometry(1, 1);
    const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
    state.imageGroup.add(imageMesh);
    imageMesh.position.x = 0;
    imageMesh.position.z = -0.1;
    imageMesh.position.y = 0;

    const textMaterial = new THREE.MeshBasicMaterial({color: '#0000ff'});
    const textGeometry = new THREE.PlaneGeometry(1, 1);
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    state.textGroup.add(textMesh);
    textMesh.position.x = 0;
    textMesh.position.z = -0.1;
    textMesh.position.y = 0;
    // ===================================================================

    fitToCamera(state.dialogueGroup, (camera) => {
      state.imageGroup.scale.y = 0.6;
      state.imageGroup.position.y = 0.2;

      state.textGroup.scale.y = 0.4;
      state.textGroup.position.y = -0.3;

      state.dialogueGroup.position.z = -2;
    });

    // Delete me - failed dialogue box group test
    // ===================================================================
    // const { dialogueBoxGroup } = await dialogueBox.load({
    //   config: { fill: '#8c2d81', text: '#ffffff' }
    // });
    // state.textGroup.add(dialogueBoxGroup);  
  };

  // HELLO START HERE
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  // Split dialogue box into background component which is stretched and text which is not
  // Render the background first and use that to decide the start position and max width of the text before wrapping

  return { load };
};

export default Dialogue;
