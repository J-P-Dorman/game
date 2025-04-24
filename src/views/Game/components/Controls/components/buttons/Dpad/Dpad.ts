import * as THREE from "three";
import { AttachToCamera, FitToCamera } from "../../../../Camera/types";
import { createLogicAction } from "../../../../GameLoops/LogicLoop/utils";
import { createPlaneMesh } from "../../../../../../../utils";

type State = {
  dpadGroup: THREE.Group;
  dpadBackgroundMesh: THREE.Group;
  leftMesh: THREE.Mesh;
  rightMesh: THREE.Mesh;
  upMesh: THREE.Mesh;
  downMesh: THREE.Mesh;
  activeButton: THREE.Mesh;
};

type Load = {
  fitToCamera: FitToCamera;
  attachToCamera: AttachToCamera;
};

const dpadBackgroundScaleX = 0.22;
const padding = 1;
const buttonLength = 2;
const buttonWidth = 1.3;
const gap = buttonWidth * 1.4;

const Dpad = () => {
  const state: State = {
    dpadGroup: undefined,
    dpadBackgroundMesh: undefined,
    leftMesh: undefined,
    rightMesh: undefined,
    upMesh: undefined,
    downMesh: undefined,
    activeButton: undefined,
  };

  // Public Methods
  // ===========================================================================
  const load = async ({ fitToCamera, attachToCamera }: Load) => {
    const dpadGroup = new THREE.Group();
    const dpadBackgroundMesh = createPlaneMesh({
      color: "#260D3F",
      size: { x: 1, y: 1 },
    });
    const leftMesh = createPlaneMesh({
      color: "#FFFFFF",
      size: { x: buttonLength, y: buttonWidth },
      borderRadius: 0.3,
    });
    const rightMesh = createPlaneMesh({
      color: "#FFFFFF",
      size: { x: buttonLength, y: buttonWidth },
      borderRadius: 0.3,
    });
    const upMesh = createPlaneMesh({
      color: "#FFFFFF",
      size: { x: buttonWidth, y: buttonLength },
      borderRadius: 0.3,
    });
    const downMesh = createPlaneMesh({
      color: "#FFFFFF",
      size: { x: buttonWidth, y: buttonLength },
      borderRadius: 0.3,
    });

    fitToCamera("y", ({ left, right }) => {
      const screenWidth = right * 2;
      const backgroundWidth = screenWidth * dpadBackgroundScaleX;

      dpadBackgroundMesh.scale.x = backgroundWidth;
      dpadBackgroundMesh.position.z = -1;
      dpadBackgroundMesh.position.x = left + backgroundWidth / 2;

      return dpadBackgroundMesh;
    });

    attachToCamera(({ left }) => {
      leftMesh.position.x = left + buttonLength / 2 + padding;
      leftMesh.position.z = -1;

      return leftMesh;
    });

    attachToCamera(({ left }) => {
      const buttonLeftX = left + buttonLength / 2 + padding;
      rightMesh.position.x = buttonLeftX + buttonLength + gap;
      rightMesh.position.z = -1;

      return rightMesh;
    });

    attachToCamera(({ left }) => {
      // upMesh.position.x = left + buttonLength + padding + (buttonWidth / 2);
      upMesh.position.x =
        left +
        buttonWidth / 2 +
        padding +
        buttonLength +
        (gap / 2 - buttonWidth / 2);
      upMesh.position.y = buttonLength / 2 + gap / 2;
      upMesh.position.z = -1;

      return upMesh;
    });

    attachToCamera(({ left }) => {
      downMesh.position.x =
        left +
        buttonWidth / 2 +
        padding +
        buttonLength +
        (gap / 2 - buttonWidth / 2);
      downMesh.position.y = -(buttonLength / 2 + gap / 2);
      downMesh.position.z = -1;

      return downMesh;
    });

    // Update state
    state.leftMesh = leftMesh;
    state.rightMesh = rightMesh;
    state.upMesh = upMesh;
    state.downMesh = downMesh;
    state.dpadGroup = dpadGroup;
  };

  const logicActions = {
    dpadDown: createLogicAction({
      id: "dpadDown",
      func: ({ action }) => {
        const { payload } = action;
        // const [] = payload;
      },
    }),
  };

  return { load, logicActions };
};

export default Dpad;
