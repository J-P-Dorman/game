import * as THREE from "three";
import { numberToPercent, percentToNumber } from "../../../../../../utils/index";
import { State, Load } from './types';

// Delete me - Will be supplied by data

const screenPercentage = 0.6;
const imageHeight = 1296;
const imageWidth = 1350;

const DialogueImage = () => {
  const state: State = {
    imageMeshes: {},
    imageGroup: new THREE.Group(),
    currentImage: undefined,
    currentImageKey: undefined,
  };

  // Private Methods
  // ===========================================================================
  const createMeshes = ({
    images,
    scaleX,
    scaleY,
    positionX,
    positionY,
  }: {
    images: Record<string, string>;
    scaleX: number;
    scaleY: number;
    positionX: number;
    positionY: number;
  }): Record<string, THREE.Mesh> => {
    return Object.entries(images).reduce((acc, [key, url]) => {
      const texture = new THREE.TextureLoader().load(url);
      texture.colorSpace = THREE.SRGBColorSpace;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
      const geometry = new THREE.PlaneGeometry(1, 1);
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.scale.y = scaleY;
      mesh.scale.x = scaleX;
      mesh.position.x = positionX;
      mesh.position.y = positionY;
      mesh.position.z = -1;

      return { ...acc, [key]: mesh };
    }, {});
  };

  // Public Methods
  // ===========================================================================
  const load = ({ attachToCamera, creatureData }: Load) => {
    const { images } = creatureData;

    // Load everything invisible
    state.imageGroup.visible = false;

    attachToCamera(({ left, right, top, bottom }) => {
      const diffX = right - left;
      const padding = percentToNumber(diffX, 10);

      // Figure out height
      const diffY = top - bottom;
      const scaleY = diffY * screenPercentage;

      // Figure out width
      const differencePx = numberToPercent(imageWidth, imageHeight);
      const scaleX = (scaleY / 100) * differencePx;

      // Apply transformations
      const meshes = createMeshes({
        images,
        scaleX,
        scaleY,
        positionX: right - scaleX / 2 - padding,
        positionY: top - scaleY / 2,
      });

      // Keep direct references to meshes for later
      state.imageMeshes = meshes;
      state.currentImage = meshes.default;

      // Add to game visually
      Object.values(meshes).forEach((mesh) => {
        mesh.visible = false;
        state.imageGroup.add(mesh);
      });

      return state.imageGroup;
    });

    return state.imageGroup;
  };

  const show = ({ imageKey }: { imageKey: string }) => {
    const imageMesh = state.imageMeshes[imageKey];

    if(!imageMesh) {
      console.error('Image not found');
      return;
    }
    
    // Hide previous image
    state.currentImage.visible = false;

    // Show new image
    state.imageGroup.visible = true;
    imageMesh.visible = true;
    state.currentImage = imageMesh;
  };

  const hide = () => {
    state.imageGroup.visible = false;
  }

  return { load, show, hide };
};

export default DialogueImage;
