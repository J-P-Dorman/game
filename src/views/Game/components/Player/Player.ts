import { loadSvg } from "../../../../utils";
import { playerData } from "../../../../data/creatureData";
import THREE from "three";

const Player = () => {
  const load = (camera: THREE.OrthographicCamera) => {
    const { id, defaultState, spriteSheet, states } = playerData;
    const { image, frameWidth, frameHeight, sheetWidth, sheetHeight } =
      spriteSheet;

    const getOffset = (
      frameWidth: number,
      sheetWidth: number,
      frameHeight: number,
      sheetHeight: number
    ) => {
      const frameCountX = sheetWidth / frameWidth;
      const frameCountY = sheetHeight / frameHeight;
      return { offsetX: 1 / frameCountX, offsetY: 1 / frameCountY };
    };

    loadSvg(image, (svgGroup: THREE.Group) => {
      // group.rotation.set(0, 0, 0);
      svgGroup.position.set(-2, -2, -9);
      camera.add(svgGroup);
    });

    // const [threeTexture, threeMaterial] = (() => {
    //   const { image, frameWidth, frameHeight, sheetWidth, sheetHeight } =
    //     spriteSheet;
    //   const { offsetX, offsetY } = getOffset(
    //     frameWidth,
    //     sheetWidth,
    //     frameHeight,
    //     sheetHeight
    //   );
    //   const threeTexture = new THREE.TextureLoader().load(image);
    //   threeTexture.colorSpace = THREE.SRGBColorSpace;

    //   // Use 0.002 to zoom in a little to stop frame bleeding
    //   threeTexture.repeat.set(offsetX - 0.002, offsetY - 0.002);

    //   const threeMaterial = new THREE.MeshBasicMaterial({
    //     map: threeTexture,
    //   });

    //   return [threeTexture, threeMaterial];
    // })();

    // const threeGeometry = new THREE.PlaneGeometry(1, 1.5);
    // const threeMesh = new THREE.Mesh(threeGeometry, threeMaterial);

    // threeMesh.rotation.set(0, 0, 0);
    // threeMesh.position.set(-2, -2, -9);

    // camera.add(threeMesh);
  };

  const start = () => {};

  return { load, start };
};

export default Player;
