import * as THREE from "three";
import { ChunkData, MapData } from "../../../../types";
import MapChunk from "./components/MapChunk/MapChunk";
import Item from "./components/Item/Item";
import Npc from "./components/Npc/Npc";
import {
  createRenderAction,
  dispatchRender,
  pushToRenderQueue,
  renderNow,
} from "../GameLoops/RenderLoop/utils";
import { createLogicAction, dispatchLogic } from "../GameLoops/LogicLoop/utils";
import { AttachToCamera } from "../Camera/types";
import { bucketData } from './components/Item/itemData'
import { sashaData } from "../../../../data/creatures/sasha";
import { ItemData, LevelItem } from "./components/Item/types";

interface Props {
  scene: THREE.Scene;
  levelData: any;
}

type State = {
  mapData: MapData;
  chunkComponents: any[];
};

const WorldMap = () => {
  const state: State = {
    mapData:[],
    chunkComponents: []
  };

  const load = ({ scene, levelData }: Props) => {
    const { playerStart, map, items, creatures } = levelData;

    const rows: any = [];

    // Load Items and start default animations
    const renderedItems = items.reduce((acc: Record<string, any>, itemData: LevelItem) => {
      const { id, position } = itemData;
      const item = Item();
      item.load(itemData);
      dispatchRender(item.renderActions.itemPlace, position);
      dispatchRender(item.renderActions.itemAnimateDefault);

      return { ...acc, [id]: item };
    }, {});

    console.log('creatures: ', creatures);

    // Load creatures and start default actions
    const renderedCreatures = creatures.reduce((
      acc: Record<string, any>,
      creatureData: any
    ) => {
      const { id, position } = creatureData;
      const creature = Npc();
      creature.load({creatureData});
      dispatchLogic(creature.logicActions.npcPlace, [42, 42]);
      dispatchLogic(creature.logicActions.npcNewPath, [
        [
          {x: 42, y: 43},
          {x: 42, y: 44},
          {x: 42, y: 45},
          {x: 43, y: 45},
          {x: 44, y: 45},
          {x: 45, y: 45},
          {x: 45, y: 44},
          {x: 45, y: 43},
          {x: 45, y: 42},
          {x: 44, y: 42},
          {x: 43, y: 42},
          {x: 42, y: 42}
        ],
        0.15,
        true
      ]);
      dispatchLogic(creature.logicActions.npcMove);
      dispatchRender(creature.renderActions.npcMove);

      return { ...acc, [id]: creature };
    }, {});

    // Loop through each row of chunks in the map
    map.forEach((chunksData: ChunkData[], chunkIndexY: number) => {

      // Loop through each chunk in the row of chunks
      chunksData.forEach((chunkData: ChunkData, chunkIndexX: number) => {
      const mapChunk = MapChunk();
      const chunkGroup = mapChunk.load(chunkData, chunkIndexX, chunkIndexY);
      scene.add(chunkGroup);
      state.chunkComponents.push(mapChunk);
      });
    });

    return [rows];
  };

  const animate = () => {
    pushToRenderQueue(
      createRenderAction({
        id: "renderMapChunk",
        func: ({ action, actionQueue }) => {
          state.chunkComponents.forEach((mapChunk) => {
            mapChunk.animate();
          });
        },
        repeat: true,
        maxTime: 1000 / 50
      })
    );
  };

  // Actions
  // ===========================================================================
  const logicActions = {
    playerTurn: createLogicAction({
      id: "initMap",
      func: ({ action }) => {
        const [chunkIds] = action.payload;

        renderNow(renderActions.initMap);
      },
      stack: false,
      payload: ["down"],
    })
  };

  const renderActions = {
    initMap: createRenderAction({
      id: "initMap",
      func: () => {
     
      },
      repeat: false,
      stack: false,
      payload: [],
      maxTime: 0,
    }),
  };

  return { load, animate, logicActions, renderActions };
};

export default WorldMap;
