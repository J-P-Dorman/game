import { initEntity } from "../../../../utils";
import { playerData } from "../../../../data/creatureData";
import THREE from "three";
// @ts-ignore
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";

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

    const loadSvg = (url: string, callback: (group: THREE.Group) => void) => {
      const svgLoader = new SVGLoader();

      svgLoader.load(
        // resource URL
        image,
        // called when the resource is loaded
        function (data) {
          const paths = data.paths;
          const group = new THREE.Group();

          for (let i = 0; i < paths.length; i++) {
            const path = paths[i];

            const material = new THREE.MeshBasicMaterial({
              color: path.color,
              side: THREE.DoubleSide,
              depthWrite: false,
            });

            const shapes = SVGLoader.createShapes(path);

            for (let j = 0; j < shapes.length; j++) {
              const shape = shapes[j];
              const geometry = new THREE.ShapeGeometry(shape);
              geometry.applyMatrix4(new THREE.Matrix4().makeScale(1, -1, 1));
              const mesh = new THREE.Mesh(geometry, material);

              group.add(mesh);
            }
          }

          callback(group);
        },
        // called when loading is in progresses
        function (xhr) {
          // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        function (error) {
          // console.log("An error happened");
        }
      );
    };

    loadSvg(image, (group: THREE.Group) => {
      // group.rotation.set(0, 0, 0);
      group.position.set(-2, -2, -9);
      camera.add(group);
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
