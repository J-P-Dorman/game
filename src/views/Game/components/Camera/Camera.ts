import * as THREE from "three";
import { updateCameraPosition } from "./helpers";
import { createRenderAction, dispatchRender } from "../GameLoops/RenderLoop/utils";
import { createLogicAction } from "../GameLoops/LogicLoop/utils";

export const Camera = () => {
  // Local state
  // ===========================================================================
  let camera: THREE.OrthographicCamera = undefined;

  // Public Methods
  // ===========================================================================
  const load = (gameWindow: HTMLElement) => {
    const width = gameWindow.offsetWidth;
    const height = gameWindow.offsetHeight;
    const aspect = width / height;

    const zoom = 10; // Controls how zoomed-in/out the orthographic view is
    const left = -zoom * aspect;
    const right = zoom * aspect;
    const top = zoom;
    const bottom = -zoom;

    camera = new THREE.OrthographicCamera(
      left,
      right,
      top,
      bottom,
      0.1,
      1000
    );

    updateCameraPosition(camera, {x: 0, z: 0});

    return { camera };
  };

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
        
        updateCameraPosition(camera, { x: x, z: -y });
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
        
        updateCameraPosition(camera, { x: x, z: -y });
      },
      repeat: true,
      stack: false,
      payload: [],
      maxTime: 0
    })
  }

  return { load, logicActions, renderActions };
};
