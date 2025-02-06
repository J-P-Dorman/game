import * as THREE from "three";

export type FitToCamera = (
  group: THREE.Group,
  callback: (camera: THREE.OrthographicCamera) => void
) => void;
