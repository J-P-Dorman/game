import { loadSvg, loadSvgSheet } from "../../../../utils/svg";
import { createLogicAction } from "../GameLoops/LogicLoop/utils";
import { createRenderAction } from "../GameLoops/RenderLoop/utils";
import * as THREE from "three";
import textBackgroundImage from "../../../../assets/sprites/scenery/house.svg";
import { AttachToCamera, FitToCamera } from "../Camera/types";
import DialogueBox from "./components/DialogueBox/DialogueBox";
import  DialogueBackground from "./components/DialogueBackground/DialogueBackground";
import  DialogueText from "./components/DialogueText/DialogueText";
import sashaImage from "../../../../assets/images/sasha.png"

type State = {
  dialogueGroup: THREE.Group;
  textGroup: THREE.Group;
  imageGroup: THREE.Group;
  image: any;
};

type Load = {
  fitToCamera: FitToCamera;
  attachToCamera: AttachToCamera;
};

const Dialogue = () => {
  const state: State = {
    dialogueGroup: new THREE.Group(),
    textGroup: new THREE.Group(),
    imageGroup: new THREE.Group(),
    image: undefined,
  };

  const textSize = 0.6;
  const textGroupScaleY = 0.4;
  const imageGroupScaleY = 0.6;

  const imageHeight = 1448;
  const imageWidth = 878;

  const calcPercent = (part: number, total: number) => (part / total) * 100;

  // Components
  // ===========================================================================
  const dialogueBackground = DialogueBackground();
  const dialogueText = DialogueText();
  // const dialogueBox =  DialogueBox();

  // Private Methods
  // ===========================================================================

  // Public Methods
  // ===========================================================================
  const load = async ({ fitToCamera, attachToCamera }: Load) => {

    // Attach the parts the the main container
    state.dialogueGroup.add(state.textGroup);
    state.dialogueGroup.add(state.imageGroup);

    // Image area
    // ================================================
    const sashaTexture = new THREE.TextureLoader().load(sashaImage);
    sashaTexture.colorSpace = THREE.SRGBColorSpace;
    const sashaMaterial = new THREE.MeshBasicMaterial({
      map: sashaTexture,
      transparent: true
    });
    const sashaGeometry = new THREE.PlaneGeometry(1,1);
    const sashaMesh = new THREE.Mesh(sashaGeometry, sashaMaterial);
    
    attachToCamera(sashaMesh, ({ right, top, bottom }) => {
      const padding = 1;

      // Figure out height
      const diffY = top - bottom;
      const scaleY = diffY * imageGroupScaleY;

      // Figure out width
      const differencePx = calcPercent(imageWidth, imageHeight);
      const scaleX = (scaleY / 100) * differencePx;

      // Apply transformations
      sashaMesh.scale.y = scaleY;
      sashaMesh.scale.x = scaleX;
      sashaMesh.position.x = right - scaleX / 2 - padding;
      sashaMesh.position.y = top - scaleY / 2
      sashaMesh.position.z = -1;
    });

    // Text area
    // ================================================

    
    // Arrange image group above text group and 
    state.imageGroup.scale.y = imageGroupScaleY;
    state.imageGroup.position.y = 0.2;
    state.textGroup.scale.y = textGroupScaleY;
    state.textGroup.position.y = -0.3;
    state.dialogueGroup.position.z = -2;
    fitToCamera(state.dialogueGroup, () => {});
   
    const backgroundMesh = await dialogueBackground.load('#8c2d81');
    const textMesh = await dialogueText.load({ color:'#ffffff', size: textSize });

    state.textGroup.add(backgroundMesh);
    // state.textGroup.add(textGroup);
    textMesh.position.z = -1;

    attachToCamera(textMesh, ({left, bottom}) => {
      const padding = 1;
      textMesh.position.x = left + padding;
      textMesh.position.y = bottom + ((textGroupScaleY * 10) * 2) - textSize - padding;
    });

  };

  return { load };
};

export default Dialogue;
