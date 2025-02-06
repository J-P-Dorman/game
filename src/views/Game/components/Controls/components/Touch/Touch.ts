import * as THREE from "three";

interface Props {
  camera: THREE.OrthographicCamera;
}

const Touch = ({ camera }: Props) => {
  const onTouchStart = (event: TouchEvent) => {};
  const onTouchEnd = (event: TouchEvent) => {};
  const onTouchMove = (event: TouchEvent) => {};

  document.addEventListener("touchstart", onTouchStart);
  document.addEventListener("touchend", onTouchEnd);
  document.addEventListener("touchmove", onTouchMove);
};

export default Touch;
