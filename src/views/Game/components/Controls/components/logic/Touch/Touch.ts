const Touch = () => {
  const start = () => {
    const onTouchStart = (event: TouchEvent) => {
      // console.log('start');
      // console.log('event: ', event);
    };
    const onTouchEnd = (event: TouchEvent) => {
      // console.log('end');
    };
    const onTouchMove = (event: TouchEvent) => {
      // console.log('move');
    };
  
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchmove", onTouchMove);
  }

  return { start };
};

export default Touch;
