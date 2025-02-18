import * as THREE from "three";
import { arrayToObject, loadSvgSheet } from "../../../../../../utils";
import { createLogicAction } from "../../../GameLoops/LogicLoop/utils";
import {
  createRenderAction,
  dispatchRender,
  renderNow,
} from "../../../GameLoops/RenderLoop/utils";

type SpriteSheet = {
  image: string;
  spriteWidth: number;
  spriteHeight: number;
  sheetWidth: number;
  sheetHeight: number;
  defaultSprite: string;
  defaultAnimation: string;
  sheetMap: string[][];
  animationMap: Record<
    string,
    {
      frames: string[];
      loop: boolean;
      fps: number;
      end?: string;
    }
  >;
};

type Item = {
  spriteSheet: SpriteSheet;
  width: number;
  height: number;
  onInteract: () => void;
};

type State = {
  spriteSheet: SpriteSheet | undefined;
  width: number;
  height: number;
  onInteract: () => void;
  currentSpriteKey: string | undefined;
  currentSprite: THREE.Group | undefined;
  spriteGroup: THREE.Group | undefined;
  spriteList: Record<string, THREE.Group<THREE.Object3DEventMap>> | undefined;
};

// ======================================================================
const Item = () => {
  const state: State = {
    spriteSheet: undefined,
    width: 0,
    height: 0,
    onInteract: () => {},
    currentSpriteKey: undefined,
    currentSprite: undefined,
    spriteGroup: undefined,
    spriteList: undefined,
  };

  const load = ({ spriteSheet, width, height, onInteract }: Item) => {
    const {
      image,
      spriteWidth,
      spriteHeight,
      sheetWidth,
      sheetHeight,
      defaultSprite,
      defaultAnimation,
      sheetMap,
      animationMap,
    } = spriteSheet;

    state.spriteSheet = spriteSheet;
    state.width = width;
    state.height = height;
    state.onInteract = onInteract;

    loadSvgSheet(
      image,
      sheetWidth,
      sheetHeight,
      spriteWidth,
      spriteHeight,
      true,
      (svgGroup) => {
        const spriteGroup = new THREE.Group();
        const sprites = svgGroup
          .flat()
          .filter((sprite) => sprite !== undefined);

        const keys = sheetMap.flat();
        const spriteList = arrayToObject(keys, sprites);

        sprites.forEach((sprite) => {
          spriteGroup.add(sprite);
        });

        // Initialise the player as the top left sprite
        sprites.forEach((sprite, i) => {
          if (i !== 0) sprite.visible = false;
        });
        state.currentSpriteKey = keys[0];
        state.currentSprite = sprites[0];

        spriteGroup.position.set(-2, -2, -2);
        spriteGroup.scale.set(0.05, 0.05, 0.05);

        state.spriteGroup = spriteGroup;
        state.spriteList = spriteList;
      }
    );
  };

  const place = ({ x, y }: { x: number; y: number }) => {};

  const animate = () => {};

  // Actions
  // ===========================================================================
  const logicActions = {};

  const renderActions = {
    itemPlace: createRenderAction({
      id: "itemPlace",
      func: ({ action }) => {
        const { payload } = action;
        const [x, y] = payload;

        // If item hasn't loaded yet, do nothing this cycle
        if (!state.spriteGroup) return;

        state.spriteGroup.position.x = x;
        state.spriteGroup.position.z = y;
        state.spriteGroup.position.y = 1;

        state.spriteGroup.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);

        window.scene.add(state.spriteGroup);
      },
      repeat: false,
      stack: true,
    }),
    itemAnimateDefault: createRenderAction({
      id: "itemAnimateDefault",
      func: ({ action }) => {
        const { defaultAnimation, animationMap } = state.spriteSheet;

        const animation = animationMap[defaultAnimation];
        const { frames, fps } = animation;

        const isAnimating = frames.includes(state.currentSpriteKey);
        const animationIndex = isAnimating
          ? frames.indexOf(state.currentSpriteKey)
          : 0;
        const nextSpriteKey = frames[animationIndex + 1] ?? frames[0];
        const nextSprite = state.spriteList[nextSpriteKey];

        state.currentSprite.visible = false;
        nextSprite.visible = true;

        state.currentSpriteKey = nextSpriteKey;
        state.currentSprite = nextSprite;
      },
      repeat: true,
      stack: false,
      maxTime: () => {
        const { defaultAnimation, animationMap } = state.spriteSheet;
        const animation = animationMap[defaultAnimation];
        const { fps } = animation;

        return 1000 / fps;
      },
    }),
  };

  return { load, place, animate, renderActions };
};

export default Item;
