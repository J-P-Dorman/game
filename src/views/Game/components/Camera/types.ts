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

export type AttachToCamera = (
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
