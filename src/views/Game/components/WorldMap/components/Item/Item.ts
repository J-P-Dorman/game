import * as THREE from "three";
import { arrayToObject, loadSvgSheet } from "../../../../../../utils";
import { createRenderAction } from "../../../GameLoops/RenderLoop/utils";
import { LevelItem, SpriteSheet } from "./types";

type State = {
  spriteSheet: SpriteSheet | undefined;
  size: number;
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
    size: 0,
    onInteract: () => {},
    currentSpriteKey: undefined,
    currentSprite: undefined,
    spriteGroup: undefined,
    spriteList: undefined,
  };

  const load = (item: LevelItem) => {
    const { spriteSheet, size, onInteract } = item;
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
    state.size = size;
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

        const maxPixels =
          spriteWidth > spriteHeight ? spriteWidth : spriteHeight;
        const size1 = 1 / maxPixels;
        const newSize = size1 * size;

        spriteGroup.scale.set(newSize, newSize, newSize);

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
        if (!state.spriteGroup) return [true];

        state.spriteGroup.position.x = x;
        state.spriteGroup.position.z = y;
        state.spriteGroup.position.y = 1;

        state.spriteGroup.rotation.set(-THREE.MathUtils.degToRad(90), 0, 0);

        window.scene.add(state.spriteGroup);

        return [false];
      },
      repeat: ([shouldRepeat]) => shouldRepeat,
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
      stack: true,
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
