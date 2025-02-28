import * as THREE from "three";
import sashaImage from "../../../../assets/images/creatures/sasha/sasha_default.png";
import { numberToPercent } from "../../../../utils";
import { AttachToCamera, FitToCamera } from "../Camera/types";
import DialogueBackground from "./components/DialogueBackground/DialogueBackground";
import DialogueText from "./components/DialogueText/DialogueText";
import DialogueImage from "./components/DialogueImage/DialogueImage";
import { CreatureData } from "../../../../types";

type State = {
  dialogueGroup: THREE.Group;
  textGroup: THREE.Group;
  // imageGroup: THREE.Group;
  textMesh: THREE.Group;
  image: any;
};

type Load = {
  fitToCamera: FitToCamera;
  attachToCamera: AttachToCamera;
  creatureData: CreatureData;
};

const Dialogue = () => {
  const state: State = {
    dialogueGroup: new THREE.Group(),
    textGroup: new THREE.Group(),
    // imageGroup: new THREE.Group(),
    textMesh: new THREE.Group(),
    image: undefined,
  };

  const textSize = 0.65;
  const textGroupScaleY = 0.4;
  const imageGroupScaleY = 0.6;

  const imageHeight = 1296;
  const imageWidth = 1350;

  // Components
  // ===========================================================================
  const dialogueBackground = DialogueBackground();
  const dialogueText = DialogueText();
  const dialogueImage = DialogueImage();

  // Public Methods
  // ===========================================================================
  const load = async ({ fitToCamera, attachToCamera, creatureData }: Load) => {
    // Attach the parts the the main container
    state.dialogueGroup.add(state.textGroup);
    state.dialogueGroup.visible = false;

    dialogueImage.load({ attachToCamera, creatureData });
    
    // Text area
    // ================================================

    // Arrange image group above text group and
    state.textGroup.scale.y = textGroupScaleY;
    state.textGroup.position.y = -0.3;
    state.dialogueGroup.position.z = -2;
    fitToCamera(() => state.dialogueGroup);

    const backgroundMesh = await dialogueBackground.load("#76428a");

    state.textGroup.add(backgroundMesh);

    attachToCamera(
      async ({
        left,
        bottom,
        right,
      }: {
        left: number;
        bottom: number;
        right: number;
      }) => {
        const padding = 1;

        const textMesh = await dialogueText.load({
          color: "#ffffff",
          fontSize: textSize,
          containerSize: Math.abs(left - right),
        });

        textMesh.position.x = left + padding;
        textMesh.position.y =
          bottom + textGroupScaleY * 10 * 2 - textSize - padding;
        textMesh.position.z = -1;

        state.textMesh = textMesh;
        textMesh.visible = false;

        return textMesh;
      }
    );
  };

  const write = ({ text, imageKey }: { text: string; imageKey: string }) => {
    dialogueText.clear();

    state.textMesh.visible = true;
    state.dialogueGroup.visible = true;

    dialogueBackground.show();
    dialogueText.write({ text });
    dialogueImage.show({imageKey});
  };

  return { load, write };
};

export default Dialogue;
