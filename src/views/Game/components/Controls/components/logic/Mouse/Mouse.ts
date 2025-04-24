const Mouse = () => {
  const start = () => {
    const onMouseUp = (event: MouseEvent) => {};
    const onMouseDown = (event: MouseEvent) => {};
    const onMouseMove = (event: MouseEvent) => {};
  
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
  }

  return { start };
};

export default Mouse;
