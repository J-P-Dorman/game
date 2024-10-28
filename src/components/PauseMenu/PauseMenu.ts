import { pauseGame, resumeGame, quitGame } from "./helpers";

const PauseMenu = () => {
  const pauseContainerEl = document.createElement("div");

  const render = () => {
    const pauseMenuEl = document.createElement("div");
    pauseMenuEl.id = "pause-menu";

    const resumeButton = document.createElement("button");
    resumeButton.id = "resume-button";
    resumeButton.innerText = "Resume";
    resumeButton.onclick = () => {
      resumeGame({ pauseContainerEl });
    };
    pauseMenuEl.appendChild(resumeButton);

    const settingsButton = document.createElement("button");
    settingsButton.id = "settings-button";
    settingsButton.innerText = "Settings";
    settingsButton.onclick = () => {};
    pauseMenuEl.appendChild(settingsButton);

    const quitButton = document.createElement("button");
    quitButton.id = "quit-button";
    quitButton.innerText = "Quit";
    quitButton.onclick = () => {
      quitGame();
    };
    pauseMenuEl.appendChild(quitButton);

    pauseContainerEl.id = "pause-container";
    pauseContainerEl.appendChild(pauseMenuEl);

    return pauseContainerEl;
  };

  return render();
};

export default PauseMenu;
