import { chunksPerLine, size } from "../../../../constants";
import {
  ChunkData,
  RowData,
  CellElsAnimated,
  AnimationKey,
} from "../../../../types";
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
            (
              accumulator,
              [key, value]: [
                key: AnimationKey,
                value: {
                  cellEl: HTMLDivElement;
                  frameEls: HTMLDivElement[];
                }[],
              ]
            ) => ({
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
      cellElsAnimated: {} as CellElsAnimated,
    }
  );

  chunkContainerEl.appendChild(chunkEl);

  return { rowEls, cellEls, cellElsAnimated };
};

export default MapChunk;
