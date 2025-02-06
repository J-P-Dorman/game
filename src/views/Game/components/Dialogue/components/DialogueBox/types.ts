import * as THREE from "three";

export type State = {
    dialogueBoxGroup: THREE.Group;
    textGroup: THREE.Group;
    textQueue: string[]
};

export type Load = {
    config: { fill: string, text: string }
};