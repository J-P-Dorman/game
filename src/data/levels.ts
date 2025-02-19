import { bucketData } from "../views/Game/components/WorldMap/components/Item/itemData";
import { dialogueOptionsSasha, sashaData } from "./creatures/sasha";
import { mapTutorialIsland } from "./mapData";

const tutorialIsland = {
  playerStart: [40, -42],
  map: mapTutorialIsland,
  items: [{ id: "testBucket", position: [41, 41], ...bucketData }],
  creatures: [
    {
      id: "sasha",
			...sashaData,
      position: [42, 42],
      dialogue: dialogueOptionsSasha,
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
        speed: 0.15,
        loop: true,
      },
    },
  ],
};

export const levels = {
  tutorialIsland,
};
