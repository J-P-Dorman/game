import { loadFont } from "../../../../../../utils/index";
import { AttachToCamera } from "../../../Camera/types";
import { createLogicAction } from "../../../GameLoops/LogicLoop/utils";
import * as THREE from 'three';
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

type State = {
	font: any;
	DialogueChoiceGroup: THREE.Group;
	options: string [];
	size: {
		left: number,
		right: number,
		top: number,
		bottom: number
	}
};

type Load = {

	attachToCamera: AttachToCamera;
};

const DialogueChoices = () => {
  const state: State = {
		font: undefined,
		DialogueChoiceGroup: new THREE.Group(),
		options: [],
		size: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}
  };

	// Private Methods
  // ===========================================================================
	const createTextMesh = (text: string, font: any, fontSize: number) => {
		const geometry = new TextGeometry(text, {
			font,
			size: fontSize,
			depth: 0.1,
			curveSegments: 5
		});
		const material = new THREE.MeshBasicMaterial({
			color: '#ffffff',
			transparent: true,
		});

		return new THREE.Mesh(geometry, material);
	}

	const createBackgroundMesh = () => {
		const geometry = new THREE.PlaneGeometry(1,2);
		const material = new THREE.MeshBasicMaterial({
			color: '#76428a',
			transparent: true,
		});

		material.opacity = 0.9;
		return new THREE.Mesh(geometry, material);
	}

	const createActiveGroup = (width: number, height: number) => {
		const borderWidth = height / 10;
		const activeGroup = new THREE.Group();
		
		const geometryTop = new THREE.PlaneGeometry(width, borderWidth);
		const materialTop = new THREE.MeshBasicMaterial({color: '#ffffff'});
		const meshTop = new THREE.Mesh(geometryTop, materialTop);
		meshTop.position.y = height;
		activeGroup.add(meshTop);

		const geometryRight = new THREE.PlaneGeometry(borderWidth, height * 2);
		const materialRight = new THREE.MeshBasicMaterial({color: '#ffffff'});
		const meshRight = new THREE.Mesh(geometryRight, materialRight);
		meshRight.position.x = width / 2;
		activeGroup.add(meshRight);

		const geometryBottom = new THREE.PlaneGeometry(width, borderWidth);
		const materialBottom = new THREE.MeshBasicMaterial({color: '#ffffff'});
		const meshBottom = new THREE.Mesh(geometryBottom, materialBottom);
		meshBottom.position.y = -height;
		activeGroup.add(meshBottom);

		const geometryLeft = new THREE.PlaneGeometry(borderWidth, height * 2);
		const materialLeft = new THREE.MeshBasicMaterial({color: '#ffffff'});
		const meshLeft = new THREE.Mesh(geometryLeft, materialLeft);
		meshLeft.position.x = -(width / 2);
		activeGroup.add(meshLeft);
		
		return activeGroup;
	}

	const optionWidth = 10;
	const optionHeight = 1;
	const fontSize = 0.3;
	const padding = 1;

  // Public Methods
  // ===========================================================================
  const load = async ({ attachToCamera }: Load) => {
		const font = await loadFont("fonts/Reddit_Mono_Regular.json");
		state.font = font;

		attachToCamera(({ left, right, top, bottom }) => {
			state.size = { left, right, top, bottom };
			return state.DialogueChoiceGroup
		});
  };

	const createOptions = (options: string[]) => {

		console.log('state: ', state);

		const optionGroups = options.map((text, i) => {
			const optionText = createTextMesh(text, state.font, fontSize);
			const optionBackground = createBackgroundMesh();
			const optionGroup = new THREE.Group();
			const activeGroup = createActiveGroup(optionWidth, optionHeight);

			optionBackground.scale.x = optionWidth;
			optionBackground.scale.y = optionHeight;
			optionBackground.position.z = -2;

			optionText.position.z = -1;
			optionText.position.y = -(fontSize / 2);
			optionText.position.x = -(optionWidth / 2) + padding;

			if(i !== 0) activeGroup.visible = false;
			
			optionGroup.position.set(
				state.size.right - (optionWidth / 2) - padding,
				((optionHeight * 2) * -i) + (padding * -i),
				-1
			);

			optionGroup.add(optionBackground);
			optionGroup.add(optionText);
			optionGroup.add(activeGroup);

			return optionGroup;
		});

		return optionGroups;
	}

	// Actions
  // ===========================================================================
  const logicActions = {
		dialogueAddOptions: createLogicAction({
      id: "dialogueAddOptions",
      func: ({action}) => {
				const { payload } = action;
				const [ options ] = payload;

				if(state.font == undefined) return;

				console.log("dialogueAddOptions");

				state.options = options;
				const optionGroups = createOptions(options);

				optionGroups.forEach((optionGroup) =>{
					state.DialogueChoiceGroup.add(optionGroup);
				});
      },
			repeat: () => state.font === undefined
    }),
    // dialogueDown: createLogicAction({
    //   id: "dialogueDown",
    //   func: () => {
    //     console.log("dialogueDown");
    //   },
    // }),
    // dialogueUp: createLogicAction({
    //   id: "dialogueUp",
    //   func: () => {
    //     console.log("dialogueUp");
    //   },
    // })
  };


  return { load, logicActions };
};

export default DialogueChoices;
