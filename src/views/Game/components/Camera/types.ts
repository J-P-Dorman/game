import * as THREE from "three";

export type FitToCamera = (
  group: THREE.Group | THREE.Mesh,
  callback: (props: {
    camera: THREE.OrthographicCamera;
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
  }) => void
) => void;

export type AttachToCamera = (
  group: THREE.Group | THREE.Mesh,
  callback: (props: {
    camera: THREE.OrthographicCamera;
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
  }) => void
) => void;
