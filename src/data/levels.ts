import { CreatureData } from "../types";
import { bucketData, houseLightData, treeData } from "../views/Game/components/WorldMap/components/Item/itemData";
import { ItemData } from "../views/Game/components/WorldMap/components/Item/types";
import { dialogueOptionsSarah, sarahData } from "./creatures/sarah";
import { DialogueOptions } from "./creatures/types";
import { mapTutorialIsland } from "./mapData";

type LevelData = {
  playerStart: [x: number, y: number],
  map: any,
  items: Array<
    ItemData & { id: string, position: [x: number, y: number] }
  >;
  creatures: Array<
    CreatureData & {
      id: string,
      position: [x: number, y: number],
      dialogue: DialogueOptions;
      defaultPath: {
        path: { x: number, y: number }[],
        speed: number;
        loop: boolean;
      },
      onInteract: <Props extends Record<string, any>>(props: Props) => void;
    }
  >
};

const tutorialIsland: LevelData = {
  playerStart: [40, -42],
  map: mapTutorialIsland,
  items: [
    { id: "house", position: [33, 38], ...houseLightData },
    { id: "house2", position: [43, 38], ...houseLightData },
    { id: "house3", position: [33, 31], ...houseLightData },
    { id: "house4", position: [43, 31], ...houseLightData },
    { id: "tree", position: [28, 34], ...treeData },
    { id: "testBucket", position: [39, 42], ...bucketData }
  ],
  creatures: [
    {
      id: "sarah",
			...sarahData,
      position: [42, 42],
      dialogue: dialogueOptionsSarah,
      defaultPath: {
        path: [
          { x: 42, y: 43 },
          { x: 42, y: 44 },
          { x: 42, y: 45 },
          { x: 43, y: 45 },
          { x: 44, y: 45 },
          { x: 45, y: 45 },
          { x: 45, y: 44 },
          { x: 45, y: 43 },
          { x: 45, y: 42 },
          { x: 44, y: 42 },
          { x: 43, y: 42 },
          { x: 42, y: 42 },
        ],
        speed: 0.07,
        loop: true,
      },
      onInteract: ({dialogue}) => {
        dialogue.start(dialogueOptionsSarah);
      }
    },
  ],
};

export const levels = {
  tutorialIsland
};
