import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

export const loadFont = async (data: any): Promise<any> => {
  const loader = new FontLoader();
  
  return loader.parse(data);
};

const createRoundedRectangle = (
  width: number,
  height: number,
  radius: number,
  segments = 20
) => {
  // Ensure the radius is not greater than half the width or height
  radius = Math.min(radius, width / 2, height / 2);

  const shape = new THREE.Shape();

  // Start at the top-left corner
  shape.moveTo(-width / 2 + radius, height / 2);

  // Top edge
  shape.lineTo(width / 2 - radius, height / 2);
  shape.quadraticCurveTo(width / 2, height / 2, width / 2, height / 2 - radius);

  // Right edge
  shape.lineTo(width / 2, -height / 2 + radius);
  shape.quadraticCurveTo(
    width / 2,
    -height / 2,
    width / 2 - radius,
    -height / 2
  );

  // Bottom edge
  shape.lineTo(-width / 2 + radius, -height / 2);
  shape.quadraticCurveTo(
    -width / 2,
    -height / 2,
    -width / 2,
    -height / 2 + radius
  );

  // Left edge
  shape.lineTo(-width / 2, height / 2 - radius);
  shape.quadraticCurveTo(
    -width / 2,
    height / 2,
    -width / 2 + radius,
    height / 2
  );

  // Create geometry from the shape
  const geometry = new THREE.ShapeGeometry(shape, segments);

  return geometry;
};
