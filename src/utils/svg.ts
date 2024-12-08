import THREE from "three";
// @ts-ignore
import { SVGLoader } from "three/addons/loaders/SVGLoader";

export const loadSvg = (
  imageUrl: string,
  callback: (svgGroup: THREE.Group) => void
) => {
  const svgLoader = new SVGLoader();

  svgLoader.load(
    imageUrl,
    (data: any) => {
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
    function (xhr: any) {
      // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error: any) {
      // console.log("An error happened");
    }
  );
};
