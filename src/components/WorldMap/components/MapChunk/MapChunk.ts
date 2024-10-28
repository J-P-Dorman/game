import { chunksPerLine, size } from "../../../../constants";
import { ChunkData, RowData } from "../../../../types";
import { getClosestIndex, forIncrement } from "../../../../utils";
import { V, textureShoreUp } from "../../../../data/mapData";
import { createAction } from "../../../Core/Core";

const MapChunk = (
  chunkData: ChunkData,
  chunkIndex: number,
  gameWidth: number,
  gameHeight: number,
  chunkContainerEl: HTMLElement
) => {
  const backgroundContainer = document.createElement("div");
  const itemContainer = document.createElement("div");
  const result = chunkIndex / chunksPerLine;
  const wholeNumber = Math.floor(result);
  const remainder = result - wholeNumber;

  let xValues: number[] = [];
  for (var i = 0; i < chunksPerLine; i++) {
    xValues.push(i / chunksPerLine);
  }

  const chunkY = wholeNumber;
  // Can't just use === for X because of rounding errors
  const chunkX = getClosestIndex(xValues, remainder).index;
  const chunkEl = document.createElement("div");
  const chunkTop = gameWidth * chunkY;
  const chunkLeft = gameWidth * chunkX;

  chunkEl.classList.add("chunk");
  chunkEl.style.top = `${chunkTop}px`;
  chunkEl.style.left = `${chunkLeft}px`;

  const { rowEls, cellEls, cellElsAnimated } = forIncrement(
    (i, acc) => {
      const rowData: RowData =
        chunkData[i] ?? forIncrement((_, acc) => [...acc, V], i);
      const rowEl = document.createElement("div");
      rowEl.classList.add("row");

      const { cellEls, cellElsAnimated } = forIncrement(
        (j, acc) => {
          const cellData = rowData[j];
          const { id, texture, item } = cellData ?? V;
          const { color, images = [], speed } = texture;
          const cellEl = document.createElement("div");

          cellEl.classList.add("cell");
          cellEl.classList.add(`cell-${id}`);
          cellEl.style.backgroundColor = color;

          const frameEls = images.map((image, i) => {
            const frameEl = document.createElement("div");
            frameEl.classList.add("cell-frame");
            frameEl.classList.add(`cell-frame-${i}`);
            frameEl.style.backgroundImage = `url('${image}')`;

            cellEl.appendChild(frameEl);
            return frameEl;
          });

          if (item) {
            const itemEl = document.createElement("div");
            itemEl.classList.add("item");
            itemEl.style.backgroundImage = `url('${item.image}')`;
            itemEl.style.width = `${item.width * 100}%`;
            itemEl.style.height = `${item.height * 100}%`;
            cellEl.appendChild(itemEl);
          }

          rowEl.appendChild(cellEl);

          return {
            cellEls: [...acc.cellEls, cellEl],
            cellElsAnimated: {
              ...acc.cellElsAnimated,
              [id]: [
                ...(acc.cellElsAnimated[id] ?? []),
                ...(images.length ? [{ cellEl, frameEls }] : []),
              ],
            },
          };
        },
        size - 1,
        {
          cellEls: [],
          cellElsAnimated: {} as Record<
            string,
            {
              cellEl: HTMLDivElement;
              frameEls: HTMLDivElement[];
            }[]
          >,
        }
      );

      chunkEl.appendChild(rowEl);

      return {
        rowEls: [...acc.rowEls, rowEl],
        cellEls: [...acc.cellEls, ...cellEls],
        cellElsAnimated: {
          ...acc.cellElsAnimated,
          ...Object.entries(cellElsAnimated).reduce(
            (accumulator, [key, value]) => ({
              ...accumulator,
              [key]: [...(acc.cellElsAnimated[key] ?? []), ...value],
            }),
            {}
          ),
        },
      };
    },
    size - 1,
    {
      rowEls: [],
      cellEls: [],
      cellElsAnimated: {} as Record<
        string,
        {
          cellEl: HTMLDivElement;
          frameEls: HTMLDivElement[];
        }[]
      >,
    }
  );

  // console.log("rowEls: ", rowEls);
  // console.log("cellEls: ", cellEls);
  // console.log("cellElsAnimated: ", cellElsAnimated);

  window.state.actionQueue.push(
    createAction({
      id: "sceneryFrame",
      func: ({ action }) => {
        const { payload } = action;
        const { cellElsAnimated } = payload;

        Object.entries(cellElsAnimated).forEach(([key, data]) => {
          const tempSolution = (() => {
            if (key === "shoreUp") return textureShoreUp;
            return false;
          })();

          if (tempSolution) {
            console.log("tempSolution");
            console.log("data: ", data);
            console.log("textureShoreUp: ", textureShoreUp);
            const prevPaint = window.state.paintHistory.shore ?? 0;
            const hasNextFrame = Boolean(textureShoreUp.images[prevPaint + 1]);

            console.log("prevPaint: ", prevPaint);
            console.log("hasNextFrame: ", hasNextFrame);

            data.forEach((frame) => {
              const { cellEl, frameEls } = frame;
              const nextFrameEl = hasNextFrame
                ? frameEls[prevPaint + 1]
                : frameEls[0];

              frameEls.forEach((frameEl) => {
                frameEl.style.opacity = "0";
              });

              nextFrameEl.style.opacity = "1";
            });

            if (hasNextFrame) window.state.paintHistory.shore += 1;
            if (!hasNextFrame) window.state.paintHistory.shore = 0;
          }
        });
      },
      maxTime: 2000,
      payload: { cellElsAnimated },
      repeat: true,
    })
  );

  chunkContainerEl.appendChild(chunkEl);
};

export default MapChunk;

// for (let i = 0; i <= size - 1; i++) {
//   const rowData: RowData =
//     chunkData[i] ?? forIncrement((_i, acc) => [...acc, V], i);
//   const rowEl = document.createElement("div");
//   rowEl.classList.add("row");

//   for (let j = 0; j <= size - 1; j++) {
//     const cellData = rowData[j];
//     const { id, texture, item } = cellData ?? V;
//     const { color, images = [], speed } = texture;
//     const cellEl = document.createElement("div");

//     cellEl.classList.add("cell");
//     cellEl.style.backgroundColor = color;

//     const frameEls = images.map((image, i) => {
//       const frameEl = document.createElement("div");
//       frameEl.classList.add("cell-frame");
//       frameEl.classList.add(`cell-frame-${i}`);
//       frameEl.style.backgroundImage = `url('${image}')`;

//       cellEl.appendChild(frameEl);
//       return frameEl;
//     });

//     if (item) {
//       const itemEl = document.createElement("div");
//       itemEl.classList.add("item");
//       itemEl.style.backgroundImage = `url('${item.image}')`;
//       itemEl.style.width = `${item.width * 100}%`;
//       itemEl.style.height = `${item.height * 100}%`;
//       cellEl.appendChild(itemEl);
//     }

//     rowEl.appendChild(cellEl);
//   }

//   chunkEl.appendChild(rowEl);
// }
