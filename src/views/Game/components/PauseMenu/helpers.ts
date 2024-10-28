export const pauseGame = ({
  pauseContainerEl,
}: {
  pauseContainerEl: HTMLDivElement;
}): void => {
  window.state.paused = true;
  pauseContainerEl.classList.add("active");
};

export const resumeGame = ({
  pauseContainerEl,
}: {
  pauseContainerEl: HTMLDivElement;
}): void => {
  window.state.paused = false;
  pauseContainerEl.classList.remove("active");
};

export const quitGame = () => {};
