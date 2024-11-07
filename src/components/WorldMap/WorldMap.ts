import { textureShoreUp, textureShoreUpLeft } from "../../data/mapData";
import { MapData, CellElsAnimated, AnimationKey } from "../../types";
import { createAction, createUpdateAction } from "../Core/Core";
import MapChunk from "./components/MapChunk/MapChunk";

interface Props {
  mapData: MapData;
  gameWidth: number;
  gameHeight: number;
}

const WorldMap = ({
  mapData,
  gameWidth,
  gameHeight,
}: Props): HTMLDivElement => {
  // Render cells
  // =================================================================
  const render = () => {
    const chunkContainerEl = document.createElement("div");
    chunkContainerEl.id = "chunk-container";

    const chunks = mapData.map((chunkData, chunkIndex) => {
      return MapChunk(
        chunkData,
        chunkIndex,
        gameWidth,
        gameHeight,
        chunkContainerEl
      );
    });

    // : [key: AnimationKey, ]

    console.log("chunks: ", chunks);

    const { cellEls, rowEls, cellElsAnimated } = chunks.reduce(
      (acc, { rowEls, cellEls, cellElsAnimated }) => {
        return {
          rowEls: [...acc.rowEls, ...rowEls],
          cellEls: { ...acc.cellEls, ...cellEls },
          cellElsAnimated: {
            ...cellElsAnimated,
            ...Object.entries(acc.cellElsAnimated).reduce(
              (
                acc,
                [key, value]: [
                  key: AnimationKey,
                  value: {
                    cellEl: HTMLDivElement;
                    frameEls: HTMLDivElement[];
                  }[],
                ]
              ) => ({
                ...acc,
                [key]: [...value, ...(cellElsAnimated[key] ?? [])],
              }),
              {} as CellElsAnimated
            ),
            //cellElsAnimated: { ...acc.cellElsAnimated, ...cellElsAnimated },
          },
        };
      },
      { rowEls: [], cellEls: [], cellElsAnimated: {} } as {
        rowEls: any[];
        cellEls: any[];
        cellElsAnimated: CellElsAnimated;
      }
    );

    console.log("test: ", cellElsAnimated);

    return { chunkContainerEl, cellElsAnimated };
  };

  const { chunkContainerEl, cellElsAnimated } = render();

  console.log("cellElsAnimated: ", cellElsAnimated);

  // Start animating cells
  // =================================================================
  window.state.updateQueue.push(
    createUpdateAction({
      id: "sceneryFrame",
      func: ({ action }) => {
        const { payload } = action;
        const { cellElsAnimated } = payload;

        // : [,

        Object.entries(cellElsAnimated).forEach(
          ([key, value]: [
            AnimationKey,
            {
              cellEl: HTMLDivElement;
              frameEls: HTMLDivElement[];
            }[],
          ]) => {
            const tempSolution = (() => {
              if (key === "shoreUp" || key === "shoreUpLeft")
                return textureShoreUp;
              if (key === "shoreUpLeft") return textureShoreUpLeft;
              return false;
            })();

            if (tempSolution) {
              // console.log("key: ", key);
              // console.log("value: ", value);
              // console.log("textureShoreUp: ", textureShoreUp);
              const prevPaint = window.state.paintHistory[key] ?? 0;
              const hasNextFrame = Boolean(
                textureShoreUp.images[prevPaint + 1]
              );

              // console.log("hasNextFrame: ", hasNextFrame);
              // console.log("hasNextFrame: ", hasNextFrame);

              value.forEach((frame) => {
                const { cellEl, frameEls } = frame;
                const nextFrameEl = hasNextFrame
                  ? frameEls[prevPaint + 1]
                  : frameEls[0];

                // console.log("nextFrameEl: ", nextFrameEl);
                // console.log(": ");
                // console.log(": ");

                frameEls.forEach((frameEl) => {
                  // console.log("baba");
                  frameEl.style.opacity = "0";
                });

                // console.log("nextFrameEl: ", nextFrameEl);
                // console.log(
                //   "nextFrameEl.style.opacity: ",
                //   nextFrameEl.style.opacity
                // );

                nextFrameEl.style.opacity = "1";
              });

              if (hasNextFrame) window.state.paintHistory[key] += 1;
              if (!hasNextFrame) window.state.paintHistory[key] = 0;
            }
          }
        );
      },
      payload: { cellElsAnimated: cellElsAnimated as CellElsAnimated },
      repeat: true,
    })
  );

  return chunkContainerEl;
};

export default WorldMap;
