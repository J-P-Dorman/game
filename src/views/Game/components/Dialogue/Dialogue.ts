import * as THREE from "three";
import sashaImage from "../../../../assets/images/creatures/sasha/sasha_default.png";
import { numberToPercent } from "../../../../utils";
import { AttachToCamera, FitToCamera } from "../Camera/types";
import DialogueBackground from "./components/DialogueBackground/DialogueBackground";
import DialogueText from "./components/DialogueText/DialogueText";
import DialogueImage from "./components/DialogueImage/DialogueImage";
import { CreatureData } from "../../../../types";
import { createLogicAction } from "../GameLoops/LogicLoop/utils";
import { DialogueOption } from "../../../../data/creatures/types";

type State = {
  dialogueGroup: THREE.Group;
  textGroup: THREE.Group;
  // imageGroup: THREE.Group;
  textMesh: THREE.Group;
  image: any;
  dialogue: {
    dialogueTree: Record<string, any>;
    currentDialogue: Record<string, any>;
    onConfirm: () => void;
    messageIndex: number;
  };
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
    dialogue: {
      dialogueTree: undefined,
      currentDialogue: undefined,
      onConfirm: () => {},
      messageIndex: 0,
    },
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

  const start = (dialogueTree: Record<string, DialogueOption>) => {
    const { start } = dialogueTree;
    const { messages, playerResponses } = start;

    window.state.flags.isInDialogue = true;

    state.dialogue.dialogueTree = dialogueTree;
    state.dialogue.currentDialogue = start;
    state.dialogue.messageIndex = 0;

    state.dialogue.onConfirm = undefined;

    write({ text: messages[0].text, imageKey: messages[0].imageKey });
  };

  const write = ({ text, imageKey }: { text: string; imageKey: string }) => {
    dialogueText.clear();

    state.textMesh.visible = true;
    state.dialogueGroup.visible = true;

    dialogueBackground.show();
    dialogueText.write({ text });
    dialogueImage.show({ imageKey });
  };

  const hide = () => {
    dialogueBackground.hide();
    dialogueImage.hide();
    dialogueText.hide();
  }

  const logicActions = {
    dialogueDown: createLogicAction({
      id: "dialogueDown",
      func: () => {
        console.log("dialogueDown");
      },
    }),
    dialogueUp: createLogicAction({
      id: "dialogueUp",
      func: () => {
        console.log("dialogueUp");
      },
    }),
    dialogueStart: createLogicAction({
      id: "dialogueStart",
      func: ({ action }) => {
        const { payload } = action;
        const [dialogueTree] = payload;
        const { start } = dialogueTree;
        const { messages, playerResponses } = start;
        const message = start.messages[0];

        window.state.flags.isInDialogue = true;

        state.dialogue.dialogueTree = dialogueTree;
        state.dialogue.messageIndex = 0;
        state.dialogue.currentDialogue = start;

        write({
          text: message.text,
          imageKey: message.imageKey,
        });
      },
    }),
    dialogueNext: createLogicAction({
      id: "dialogueNext",
      func: () => {
        const { currentDialogue, messageIndex } = state.dialogue;
        const { messages, playerResponses, nextOptionKey } = currentDialogue;
        const isLastMessage = messageIndex >= messages.length - 1;

        // Handle next message in list
        // ==========================================
        if (!isLastMessage) {
          const nextMessageIndex = messageIndex + 1;
          const message = messages[nextMessageIndex];

          state.dialogue.messageIndex = messageIndex + 1;

          write({
            text: message.text,
            imageKey: message.imageKey,
          });
        }

        // Handle player choosing a dialogue option
        // ==========================================
        else if (isLastMessage && playerResponses?.length) {
          // TODO: Allow the player to pick, rather than taking the first
          const choice = playerResponses[0];
          const { text, nextOptionKey, onChoose } = choice;
          const nextOption = state.dialogue.dialogueTree[nextOptionKey];
          const message = nextOption.messages?.[0];

          state.dialogue.currentDialogue = nextOption;
          state.dialogue.messageIndex = 0;

          if (onChoose) onChoose();

          write({
            text: message.text,
            imageKey: message.imageKey,
          });
        }

        // Handle running out of messages and moving on to next dialogue
        // ==========================================
        else if (nextOptionKey) {
          const nextOptionKey = currentDialogue.nextOptionKey;
          const nextOption = state.dialogue.dialogueTree[nextOptionKey];
          const message = nextOption.messages?.[0];

          state.dialogue.currentDialogue = nextOption;
          state.dialogue.messageIndex = 0;

          write({
            text: message.text,
            imageKey: message.imageKey,
          });
        }

        // Handle hitting the end of the dialogue tree
        else {
          window.state.flags.isInDialogue = false;
          hide();
        }
      },
    }),
  };


  return { load, start, write, logicActions };
};

export default Dialogue;
