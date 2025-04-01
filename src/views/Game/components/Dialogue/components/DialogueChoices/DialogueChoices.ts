import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { loadFont } from "../../../../../../utils/index";
import { AttachToCamera } from "../../../Camera/types";
import { PlayerChoice } from "../../../../../../data/creatures/types";

type State = {
  font: any;
  DialogueChoiceGroup: THREE.Group;
  options: PlayerChoice[];
  activeOptionIndex: number;
  activeOptionGroup: THREE.Group;
  optionGroups: THREE.Group[];
  size: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
};

type Load = { attachToCamera: AttachToCamera };

const DialogueChoices = () => {
  const state: State = {
    font: undefined,
    DialogueChoiceGroup: undefined,
    options: [],
    activeOptionIndex: 0,
    activeOptionGroup: undefined,
    optionGroups: [],
    size: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  };

  // Private Methods
  // ===========================================================================
  const createTextMesh = (text: string, font: any, fontSize: number) => {
    const geometry = new TextGeometry(text, {
      font,
      size: fontSize,
      depth: 0.1,
      curveSegments: 5,
    });
    const material = new THREE.MeshBasicMaterial({
      color: "#ffffff",
      transparent: true,
    });

    return new THREE.Mesh(geometry, material);
  };

  const createBackgroundMesh = () => {
    const geometry = new THREE.PlaneGeometry(1, 2);
    const material = new THREE.MeshBasicMaterial({
      color: "#76428a",
      transparent: true,
    });

    material.opacity = 0.9;
    return new THREE.Mesh(geometry, material);
  };

  const createActiveGroup = (width: number, height: number) => {
    const borderWidth = height / 10;
    const activeGroup = new THREE.Group();
    activeGroup.name = "activeBorder";

    const geometryTop = new THREE.PlaneGeometry(width, borderWidth);
    const materialTop = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    const meshTop = new THREE.Mesh(geometryTop, materialTop);
    meshTop.position.y = height;
    activeGroup.add(meshTop);

    const geometryRight = new THREE.PlaneGeometry(borderWidth, height * 2);
    const materialRight = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    const meshRight = new THREE.Mesh(geometryRight, materialRight);
    meshRight.position.x = width / 2;
    activeGroup.add(meshRight);

    const geometryBottom = new THREE.PlaneGeometry(width, borderWidth);
    const materialBottom = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    const meshBottom = new THREE.Mesh(geometryBottom, materialBottom);
    meshBottom.position.y = -height;
    activeGroup.add(meshBottom);

    const geometryLeft = new THREE.PlaneGeometry(borderWidth, height * 2);
    const materialLeft = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    const meshLeft = new THREE.Mesh(geometryLeft, materialLeft);
    meshLeft.position.x = -(width / 2);
    activeGroup.add(meshLeft);

    return activeGroup;
  };

  const optionWidth = 10;
  const optionHeight = 0.7;
  const fontSize = 0.3;
  const padding = 0.5;
  const choiceGap = 0.2;
  const paddingBottom = 1;

  // Private Methods
  // ===========================================================================
  const createOptions = (
    options: PlayerChoice[]
  ) => {
    const optionGroups = options.map((option, i) => {
      const { text } = option;
      const optionText = createTextMesh(text, state.font, fontSize);
      const optionBackground = createBackgroundMesh();
      const optionGroup = new THREE.Group();
      const activeGroup = createActiveGroup(optionWidth, optionHeight);

      optionBackground.scale.x = optionWidth;
      optionBackground.scale.y = optionHeight;
      optionBackground.position.z = -0.2;

      optionText.position.z = -0.1;
      optionText.position.y = -(fontSize / 2);
      optionText.position.x = -(optionWidth / 2) + padding;

      if (i !== 0) activeGroup.visible = false;

      optionGroup.position.set(
        state.size.right - optionWidth / 2 - padding,
        optionHeight * 2 * -i + choiceGap * -i + paddingBottom,
        -0.1
      );

      optionGroup.add(optionBackground);
      optionGroup.add(optionText);
      optionGroup.add(activeGroup);

      return optionGroup;
    });

    return optionGroups;
  };

  // Public Methods
  // ===========================================================================
  const load = async ({ attachToCamera }: Load) => {
    const font = await loadFont("fonts/Reddit_Mono_Regular.json");
    state.font = font;

    const dialogueChoiceGroup = new THREE.Group();
    dialogueChoiceGroup.visible = false;
    state.DialogueChoiceGroup = dialogueChoiceGroup;

    attachToCamera(({ left, right, top, bottom }) => {
      state.size = { left, right, top, bottom };
      return dialogueChoiceGroup;
    });
  };

  const start = (options: PlayerChoice[]) => {
    state.activeOptionIndex = 0;
    state.options = options;
    const optionGroups = createOptions(options);
    state.optionGroups = optionGroups;
    state.activeOptionGroup = optionGroups[0];

    optionGroups.forEach((optionGroup) => {
      state.DialogueChoiceGroup.add(optionGroup);
    });

		return {
      option: options[0],
      group: optionGroups[0],
    };
  };

  const down = () => {
    const { optionGroups, activeOptionIndex, activeOptionGroup, options } = state;
    const max = optionGroups.length - 1;
    const nextIndex =
      activeOptionIndex + 1 >= max ? max : activeOptionIndex + 1;
    const nextGroup = optionGroups[nextIndex];

    const currentBorder = activeOptionGroup.children.find(
      ({ name }) => name === "activeBorder"
    );
    const nextBorder = nextGroup.children.find(
      ({ name }) => name === "activeBorder"
    );

    currentBorder.visible = false;
    nextBorder.visible = true;

    state.activeOptionIndex = nextIndex;
    state.activeOptionGroup = nextGroup;

		return {
      option: options[nextIndex],
      group: nextGroup,
    };
  };

  const up = () => {
    const { optionGroups, activeOptionIndex, activeOptionGroup, options } =
      state;
    const max = optionGroups.length - 1;
    const nextIndex = activeOptionIndex - 1 <= 0 ? 0 : activeOptionIndex - 1;
    const nextGroup = optionGroups[nextIndex];

    const currentBorder = activeOptionGroup.children.find(
      ({ name }) => name === "activeBorder"
    );
    const nextBorder = nextGroup.children.find(
      ({ name }) => name === "activeBorder"
    );

    currentBorder.visible = false;
    nextBorder.visible = true;

    state.activeOptionIndex = nextIndex;
    state.activeOptionGroup = nextGroup;

    return {
      option: options[nextIndex],
      group: nextGroup,
    };
  };

  const show = () => {
    state.DialogueChoiceGroup.visible = true;
  };

  const hide = () => {
    state.DialogueChoiceGroup.visible = false;
  };

  const clear = () => {
    state.DialogueChoiceGroup.clear();
    state.activeOptionIndex = 0;
    state.options = [];
    state.optionGroups = [];
    state.activeOptionGroup.clear();
  };

  return { load, start, show, hide, down, up, clear };
};

export default DialogueChoices;
