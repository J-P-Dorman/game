import * as THREE from "three";

export type State = {
	textGroup: THREE.Group;
	letterMeshes: THREE.Mesh[];
	letterPause: number;
	wordPause: number;
};
