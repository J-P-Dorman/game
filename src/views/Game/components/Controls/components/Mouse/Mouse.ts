import * as THREE from "three";

interface Props {
  camera: THREE.OrthographicCamera;
}

const Mouse = ({ camera }: Props) => {
  const onMouseUp = (event: MouseEvent) => {};
  const onMouseDown = (event: MouseEvent) => {};
  const onMouseMove = (event: MouseEvent) => {};

  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);
};

export default Mouse;
