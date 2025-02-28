import * as THREE from "three";
import { DialogueOption } from "../../../../../../data/creatures/types";

export type State = {
	text: string;
    color: string;
    fontSize: number;
	font: any;
    containerSize: number;
	clock: THREE.Clock;
	textGroup: THREE.Group;
	letterMeshes: THREE.Mesh[];
	letterPause: number;
};
