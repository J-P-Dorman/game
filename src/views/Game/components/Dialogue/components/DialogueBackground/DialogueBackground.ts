import * as THREE from "three";
import {  State } from "./types";

const DialogueBackground = () => {
  const state: State = {
    show: true,
    backgroundMesh: undefined
  };

  // Private Methods
  // ===========================================================================
  const createBackgroundMesh = (backgroundColor: string) => {
    const backgroundMaterial = new THREE.MeshBasicMaterial({
      color: backgroundColor,
      transparent: true,
    });
    backgroundMaterial.opacity = 0.9;
    const backgroundGeometry = new THREE.PlaneGeometry(1, 1);
    const backgroundMesh = new THREE.Mesh(
      backgroundGeometry,
      backgroundMaterial
    );
    backgroundMesh.position.z = -0.1;

    return backgroundMesh;
  };

  // Public Methods
  // ===========================================================================
  const load = async (backgroundColor: string) => {
    state.backgroundMesh = createBackgroundMesh(backgroundColor);
    return state.backgroundMesh;
  };

  const show = () => {
    state.show = true;
    state.backgroundMesh.visible = true;
  };

  const hide = () => {
    state.show = false;
    state.backgroundMesh.visible = false;
  };

  return { load, show, hide };
};

export default DialogueBackground;
