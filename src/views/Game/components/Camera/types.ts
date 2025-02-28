import * as THREE from "three";

export type FitToCamera = (
  callback: (props: {
    camera: THREE.OrthographicCamera;
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
  }) => THREE.Group | THREE.Mesh
) => void;

export type AttachToCamera = <T extends THREE.Group | THREE.Mesh | Promise<THREE.Group> | Promise<THREE.Mesh>>(
  callback: (props: {
    camera: THREE.OrthographicCamera;
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
  }) => T
) => void;
