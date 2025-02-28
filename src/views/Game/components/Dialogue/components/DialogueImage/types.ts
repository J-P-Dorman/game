import * as THREE from "three";
import { CreatureData } from "../../../../../../types";
import { AttachToCamera } from "../../../Camera/types";

export type State = {
  imageGroup: THREE.Group;
  imageMeshes: Record<string, THREE.Mesh>;
  currentImage: THREE.Mesh;
  currentImageKey: string;
};

export type Load = {
  attachToCamera: AttachToCamera;
  creatureData: CreatureData;
};
