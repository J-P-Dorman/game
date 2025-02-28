const Touch = () => {
  const start = () => {
    const onTouchStart = (event: TouchEvent) => {};
    const onTouchEnd = (event: TouchEvent) => {};
    const onTouchMove = (event: TouchEvent) => {};
  
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchmove", onTouchMove);
  }

  return { start };
};

export default Touch;
