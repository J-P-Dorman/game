import * as THREE from "three";
import { updateCameraPosition } from "./helpers";
import { createRenderAction, dispatchRender } from "../GameLoops/RenderLoop/utils";
import { createLogicAction } from "../GameLoops/LogicLoop/utils";
import { AttachToCamera, FitToCamera } from './types';

type State = {
  camera: THREE.OrthographicCamera;
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

export const Camera = () => {
  // Local state
  // ===========================================================================
  const state: State = {
    camera: undefined,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0
  };

  // Public Methods
  // ===========================================================================
  const load = (gameWindow: HTMLElement) => {
    state.width = gameWindow.offsetWidth;
    state.height = gameWindow.offsetHeight;
    const aspect = state.width / state.height;

    const zoom = 10; // Controls how zoomed-in/out the orthographic view is
    state.left = -zoom * aspect;
    state.right = zoom * aspect;
    state.top = zoom;
    state.bottom = -zoom;

    state.camera = new THREE.OrthographicCamera(
      state.left,
      state.right,
      state.top,
      state.bottom,
      0.1,
      1000
    );

    // const testMaterial = new THREE.MeshBasicMaterial({color: '#ff0000'});
    // const testGeometry = new THREE.BoxGeometry(1, 1);
    // const testMesh = new THREE.Mesh(testGeometry, testMaterial);
    // testMesh.position.z = -2;
    // state.camera.add(testMesh);

    updateCameraPosition(state.camera, {x: 0, z: 0});

    return { camera: state.camera };
  };

  const attachToCamera: AttachToCamera = async (callback) => {
    const group = await callback({
      camera: state.camera,
      left: state.left,
      right: state.right,
      top: state.top,
      bottom: state.bottom,
      width: state.width,
      height: state.height
    });

    state.camera.add(group);
  }

/**
 * Fit a THREE group to the camera viewport. Put your content in the group in the callback.
 *
 * @param group The THREE group to append to camera
 * @param callbaack Add stuff to the group inside this callback
 */
  const fitToCamera: FitToCamera = (callback) => {
    const maxWidth = state.right + state.left;
    const maxHeight = state.top - state.bottom;




    const group = callback({
      camera: state.camera,
      left: state.left,
      right: state.right,
      top: state.top,
      bottom: state.bottom,
      width: state.width,
      height: state.height
    });

    group.scale.x = state.right - state.left;
    group.position.x = 0;

    group.scale.y = state.top - state.bottom;
    group.position.y = 0;

    attachToCamera(() => group);
  }

  // Actions
  // ===========================================================================
  const logicActions = {
    cameraSnap: createLogicAction({
      id: 'cameraSnap',
      func: ({action}) => {
        const [ x, y ] = action.payload;

        window.state.player.position.x = x;
        window.state.player.position.y = y;

        dispatchRender(renderActions.cameraSnap);
      },
      repeat: false,
      stack: false,
      payload: [0, 0]
    }),
    cameraMove: createLogicAction({
      id: 'cameraMove',
      func: ({action}) => {
        const [ speedX, speedY ] = action.payload;

        window.state.player.position.x += speedX;
        window.state.player.position.y += speedY;

        dispatchRender(renderActions.cameraMove);
      },
      repeat: true,
      stack: false,
      payload: [0, 0]
    })
  };

  const renderActions = {
    cameraSnap: createRenderAction({
      id: 'cameraSnap',
      func: () => {
        const { x, y } = window.state.player.position;
        
        updateCameraPosition(state.camera, { x: x, z: -y });
      },
      repeat: false,
      stack: false,
      payload: [],
      maxTime: 0
    }),
    cameraMove: createRenderAction({
      id: 'cameraMove',
      func: () => {
        const { x, y } = window.state.player.position;
        
        updateCameraPosition(state.camera, { x: x, z: -y });
      },
      repeat: true,
      stack: false,
      payload: [],
      maxTime: 0
    })
  }

  return { load, logicActions, renderActions, attachToCamera, fitToCamera };
};
