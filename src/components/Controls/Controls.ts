import Keyboard from "./components/Keyboard/Keyboard";

interface Props {
  pauseContainerEl: HTMLDivElement;
  chunkContainerEl: HTMLDivElement;
}
const Controls = ({ pauseContainerEl, chunkContainerEl }: Props) => {
  Keyboard({ pauseContainerEl, chunkContainerEl });
};

export default Controls;
