import treeImg from "../assets/sprites/scenery/tree.png";
import { TileData, ChunkData, MapData, CreatureData } from "../types";
import { Item, Texture } from "../views/Game/components/WorldMap/components/MapChunk/MapTile/types";
import imageFlowers from '../assets/sprites/scenery/tiling_flowers_daisy.svg';
import imageShoreUpLeftIn from '../assets/sprites/scenery/shore/shore_up_left_in.png';
import imageShoreUpLeftOut from '../assets/sprites/scenery/shore/shore_up_left_out.png';
import imageShoreUp from '../assets/sprites/scenery/shore/shore_up.png';
import { sashaData } from './creatures/sasha';
import imageGrass_1_1 from '../assets/sprites/scenery/tiling_grass_1_1.svg';
import imageGrass_2_1 from '../assets/sprites/scenery/tiling_grass_2_1.svg';
import imageGrass_1_2 from '../assets/sprites/scenery/tiling_grass_1_2.svg';
import imageGrass_2_2 from '../assets/sprites/scenery/tiling_grass_2_2.svg';
import imageSand_1_1 from '../assets/sprites/scenery/tiling_sand_1_1.svg';
import imageSand_2_1 from '../assets/sprites/scenery/tiling_sand_2_1.svg';
import imageSand_1_2 from '../assets/sprites/scenery/tiling_sand_1_2.svg';
import imageSand_2_2 from '../assets/sprites/scenery/tiling_sand_2_2.svg';
import imageGrassSandHorizontal from '../assets/sprites/scenery/tiling-grass-sand-horizontal.svg';
import imageGrassSandHorizontal2 from '../assets/sprites/scenery/tiling-grass-sand-horizontal-2.svg';
import imageGrassSandLeftDown from '../assets/sprites/scenery/tiling-grass-sand-left-down.svg';
import imageGrassSandLeftUp from '../assets/sprites/scenery/tiling-grass-sand-left-up.svg';
import imageGrassSandRightDown from '../assets/sprites/scenery/tiling-grass-sand-right-down.svg';
import imageGrassSandRightUp from '../assets/sprites/scenery/tiling-grass-sand-right-up.svg';
import imageSandGrassLeftDown from '../assets/sprites/scenery/tiling-sand-grass-left-down.svg';
import imageSandGrassLeftUp from '../assets/sprites/scenery/tiling-sand-grass-left-up.svg';
import imageSandGrassRightDown from '../assets/sprites/scenery/tiling-sand-grass-right-down.svg';
import imageSandGrassRightUp from '../assets/sprites/scenery/tiling-sand-grass-right-up.svg';


// Textures
// =================================================================
const textureSand: Texture = { color: "#dfd4a6", spriteSheet: undefined };
const textureGrass: Texture = { color: "#8ec55a", spriteSheet: undefined };
const textureVoid: Texture = { color: "#111111", spriteSheet: undefined };
const textureWater: Texture = { color: "#2d6cab", spriteSheet: undefined };
const textureGrass_1_1: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrass_1_1,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grass',
    defaultAnimation: 'grass',
    sheetMap: [["grass"]],
    animationMap: {
      grass: {
        frames: ["grass"],
        duration: 0,
        repeat: true
      }
    }
  }
};
const textureGrass_2_1: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrass_2_1,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grass',
    defaultAnimation: 'grass',
    sheetMap: [["grass"]],
    animationMap: {
      grass: {
        frames: ["grass"],
        duration: 0,
        repeat: true
      }
    }
  }
};
const textureGrass_1_2: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrass_1_2,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grass',
    defaultAnimation: 'grass',
    sheetMap: [["grass"]],
    animationMap: {
      grass: {
        frames: ["grass"],
        duration: 0,
        repeat: true
      }
    }
  }
};
const textureGrass_2_2: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrass_2_2,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grass',
    defaultAnimation: 'grass',
    sheetMap: [["grass"]],
    animationMap: {
      grass: {
        frames: ["grass"],
        duration: 0,
        repeat: true
      }
    }
  }
};
const textureSand_1_1: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageSand_1_1,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'sand',
    defaultAnimation: 'sand',
    sheetMap: [["sand"]],
    animationMap: {
      sand: {
        frames: ["sand"],
        duration: 0,
        repeat: true
      }
    }
  }
};
const textureSand_2_1: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageSand_2_1,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'sand',
    defaultAnimation: 'sand',
    sheetMap: [["sand"]],
    animationMap: {
      sand: {
        frames: ["sand"],
        duration: 0,
        repeat: true
      }
    }
  }
};
const textureSand_1_2: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageSand_1_2,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'sand',
    defaultAnimation: 'sand',
    sheetMap: [["sand"]],
    animationMap: {
      sand: {
        frames: ["sand"],
        duration: 0,
        repeat: true
      }
    }
  }
};
const textureSand_2_2: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageSand_2_2,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'sand',
    defaultAnimation: 'sand',
    sheetMap: [["sand"]],
    animationMap: {
      sand: {
        frames: ["sand"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureGrassSandHorizontal: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrassSandHorizontal,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grassSandHorizontal',
    defaultAnimation: 'grassSandHorizontal',
    sheetMap: [["grassSandHorizontal"]],
    animationMap: {
      grassSandHorizontal: {
        frames: ["grassSandHorizontal"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureGrassSandHorizontal2: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrassSandHorizontal2,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grassSandHorizontal2',
    defaultAnimation: 'grassSandHorizontal2',
    sheetMap: [["grassSandHorizontal2"]],
    animationMap: {
      grassSandHorizontal: {
        frames: ["grassSandHorizontal2"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureGrassSandLeftDown: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrassSandLeftDown,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grassSandLeftDown',
    defaultAnimation: 'grassSandLeftDown',
    sheetMap: [["grassSandLeftDown"]],
    animationMap: {
      grassSandLeftDown: {
        frames: ["grassSandLeftDown"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureGrassSandLeftUp: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrassSandLeftUp,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grassSandLeftUp',
    defaultAnimation: 'grassSandLeftUp',
    sheetMap: [["grassSandLeftUp"]],
    animationMap: {
      grassSandLeftDown: {
        frames: ["grassSandLeftUp"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureGrassSandRightDown: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrassSandRightDown,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grassSandRightDown',
    defaultAnimation: 'grassSandRightDown',
    sheetMap: [["grassSandRightDown"]],
    animationMap: {
      grassSandLeftDown: {
        frames: ["grassSandRightDown"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureGrassSandRightUp: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageGrassSandRightUp,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'grassSandRightUp',
    defaultAnimation: 'grassSandRightUp',
    sheetMap: [["grassSandRightUp"]],
    animationMap: {
      grassSandLeftDown: {
        frames: ["grassSandRightUp"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureSandGrassLeftDown: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageSandGrassLeftDown,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'sandGrassLeftDown',
    defaultAnimation: 'sandGrassLeftDown',
    sheetMap: [["sandGrassLeftDown"]],
    animationMap: {
      sandGrassLeftDown: {
        frames: ["sandGrassLeftDown"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureSandGrassLeftUp: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageSandGrassLeftUp,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'sandGrassLeftUp',
    defaultAnimation: 'sandGrassLeftUp',
    sheetMap: [["sandGrassLeftUp"]],
    animationMap: {
      sandGrassLeftDown: {
        frames: ["sandGrassLeftUp"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureSandGrassRightDown: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageSandGrassRightDown,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'sandGrassRightDown',
    defaultAnimation: 'sandGrassRightDown',
    sheetMap: [["sandGrassRightDown"]],
    animationMap: {
      sandGrassLeftDown: {
        frames: ["sandGrassRightDown"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureSandGrassRightUp: Texture = {
  color: "#8ec55a",
  spriteSheet: {
    image: imageSandGrassRightUp,
    textureWidth: 16,
    textureHeight: 16,
    sheetWidth: 16,
    sheetHeight: 16,
    defaultTexture: 'sandGrassRightUp',
    defaultAnimation: 'sandGrassRightUp',
    sheetMap: [["sandGrassRightUp"]],
    animationMap: {
      grassSandLeftDown: {
        frames: ["sandGrassRightUp"],
        duration: 0,
        repeat: true
      }
    }
  }
};

const textureGrassFlowers: Texture = {
  color: "#8bb312",
  spriteSheet: {
    image: imageFlowers,
    textureWidth: 150,
    textureHeight: 150,
    sheetWidth: 150,
    sheetHeight: 150,
    defaultTexture: 'shoreUp1',
    defaultAnimation: 'shoreUpDefault',
    sheetMap: [["flowers"]],
    animationMap: {
      shoreUpDefault: {
        frames: ["flowers"],
        duration: 0,
        repeat: true
      }
    }
  }
};

export const textureShoreUp: Texture = {
  color: "rgb(107 143 247)",
  spriteSheet: {
    image: imageShoreUp,
    textureWidth: 150,
    textureHeight: 150,
    sheetWidth: 9000,
    sheetHeight: 150,
    defaultTexture: 'shoreUp1',
    defaultAnimation: 'shoreUpDefault',
    sheetMap: [
      [
        "shoreUp1",
        "shoreUp2",
        "shoreUp3",
        "shoreUp4",
        "shoreUp5",
        "shoreUp6",
        "shoreUp7",
        "shoreUp8",
        "shoreUp9",
        "shoreUp10",
        "shoreUp11",
        "shoreUp12",
        "shoreUp13",
        "shoreUp14",
        "shoreUp15"
      ]
    ],
    animationMap: {
      shoreUpDefault: {
        frames: [
          "shoreUp1",
          "shoreUp2",
          "shoreUp3",
          "shoreUp4",
          "shoreUp5",
          "shoreUp6",
          "shoreUp7",
          "shoreUp8",
          "shoreUp9",
          "shoreUp10",
          "shoreUp11",
          "shoreUp12",
          "shoreUp13",
          "shoreUp14",
          "shoreUp15",
          "shoreUp14",
          "shoreUp13",
          "shoreUp12",
          "shoreUp11",
          "shoreUp10",
          "shoreUp9",
          "shoreUp8",
          "shoreUp7",
          "shoreUp6",
          "shoreUp5",
          "shoreUp4",
          "shoreUp3",
          "shoreUp2"
        ],
        duration: 2000,
        repeat: true
      }
    }
  }
};

export const textureShoreUpLeftIn: Texture = {
  color: "rgb(107 143 247)",
  spriteSheet: {
    image: imageShoreUpLeftIn,
    textureWidth: 150,
    textureHeight: 150,
    sheetWidth: 9000,
    sheetHeight: 150,
    defaultTexture: 'shoreUpLeftIn1',
    defaultAnimation: 'shoreUpLeftInDefault',
    sheetMap: [
      [
        "shoreUpLeftIn1",
        "shoreUpLeftIn2",
        "shoreUpLeftIn3",
        "shoreUpLeftIn4",
        "shoreUpLeftIn5",
        "shoreUpLeftIn6",
        "shoreUpLeftIn7",
        "shoreUpLeftIn8",
        "shoreUpLeftIn9",
        "shoreUpLeftIn10",
        "shoreUpLeftIn11",
        "shoreUpLeftIn12",
        "shoreUpLeftIn13",
        "shoreUpLeftIn14",
        "shoreUpLeftIn15"
      ]
    ],
    animationMap: {
      shoreUpLeftInDefault: {
        frames: [
          "shoreUpLeftIn1",
          "shoreUpLeftIn2",
          "shoreUpLeftIn3",
          "shoreUpLeftIn4",
          "shoreUpLeftIn5",
          "shoreUpLeftIn6",
          "shoreUpLeftIn7",
          "shoreUpLeftIn8",
          "shoreUpLeftIn9",
          "shoreUpLeftIn10",
          "shoreUpLeftIn11",
          "shoreUpLeftIn12",
          "shoreUpLeftIn13",
          "shoreUpLeftIn14",
          "shoreUpLeftIn15",
          "shoreUpLeftIn14",
          "shoreUpLeftIn13",
          "shoreUpLeftIn12",
          "shoreUpLeftIn11",
          "shoreUpLeftIn10",
          "shoreUpLeftIn9",
          "shoreUpLeftIn8",
          "shoreUpLeftIn7",
          "shoreUpLeftIn6",
          "shoreUpLeftIn5",
          "shoreUpLeftIn4",
          "shoreUpLeftIn3",
          "shoreUpLeftIn2"
        ],
        duration: 2000,
        repeat: true
      }
    }
  }
};

export const textureShoreUpLeftOut: Texture = {
  color: "rgb(107 143 247)",
  spriteSheet: {
    image: imageShoreUpLeftOut,
    textureWidth: 150,
    textureHeight: 150,
    sheetWidth: 9000,
    sheetHeight: 150,
    defaultTexture: 'shoreUpLeftOut1',
    defaultAnimation: 'shoreUpLeftOutDefault',
    sheetMap: [
      [
        "shoreUpLeftOut1",
        "shoreUpLeftOut2",
        "shoreUpLeftOut3",
        "shoreUpLeftOut4",
        "shoreUpLeftOut5",
        "shoreUpLeftOut6",
        "shoreUpLeftOut7",
        "shoreUpLeftOut8",
        "shoreUpLeftOut9",
        "shoreUpLeftOut10",
        "shoreUpLeftOut11",
        "shoreUpLeftOut12",
        "shoreUpLeftOut13",
        "shoreUpLeftOut14",
        "shoreUpLeftOut15"
      ]
    ],
    animationMap: {
      shoreUpLeftOutDefault: {
        frames: [
          "shoreUpLeftOut1",
          "shoreUpLeftOut2",
          "shoreUpLeftOut3",
          "shoreUpLeftOut4",
          "shoreUpLeftOut5",
          "shoreUpLeftOut6",
          "shoreUpLeftOut7",
          "shoreUpLeftOut8",
          "shoreUpLeftOut9",
          "shoreUpLeftOut10",
          "shoreUpLeftOut11",
          "shoreUpLeftOut12",
          "shoreUpLeftOut13",
          "shoreUpLeftOut14",
          "shoreUpLeftOut15",
          "shoreUpLeftOut14",
          "shoreUpLeftOut13",
          "shoreUpLeftOut12",
          "shoreUpLeftOut11",
          "shoreUpLeftOut10",
          "shoreUpLeftOut9",
          "shoreUpLeftOut8",
          "shoreUpLeftOut7",
          "shoreUpLeftOut6",
          "shoreUpLeftOut5",
          "shoreUpLeftOut4",
          "shoreUpLeftOut3",
          "shoreUpLeftOut2"
        ],
        duration: 2000,
        repeat: true
      }
    }
  }
};

// Items
// =================================================================
const itemTree: Item = {
  image: treeImg,
  width: 3.5,
  height: 3.5,
  anchor: "topLeft"
};

const itemSasha: Item & {creatureData: CreatureData} = {
  width: 2,
  height: 2,
  anchor: "topLeft",
  creatureData: {
    ...sashaData
  }
};


// Tiles
// =================================================================
export const S: TileData = { id: "sand", texture: textureSand, item: undefined };
export const G: TileData = {
  id: "grass",
  texture: textureGrass,
  item: undefined,
};
export const G_1_1: TileData = {
  id: "grass_1_1",
  texture: textureGrass_1_1,
  item: undefined,
};
export const G_2_1: TileData = {
  id: "grass_2_1",
  texture: textureGrass_2_1,
  item: undefined,
};
export const G_1_2: TileData = {
  id: "grass_1_2",
  texture: textureGrass_1_2,
  item: undefined,
};
export const G_2_2: TileData = {
  id: "grass_2_2",
  texture: textureGrass_2_2,
  item: undefined,
};
export const S_1_1: TileData = {
  id: "sand_1_1",
  texture: textureSand_1_1,
  item: undefined,
};
export const S_2_1: TileData = {
  id: "sand_2_1",
  texture: textureSand_2_1,
  item: undefined,
};
export const S_1_2: TileData = {
  id: "sand_1_2",
  texture: textureSand_1_2,
  item: undefined,
};
export const S_2_2: TileData = {
  id: "sand_2_2",
  texture: textureSand_2_2,
  item: undefined,
};

export const G_S_H: TileData = {
  id: "grassSandHorizontal",
  texture: textureGrassSandHorizontal,
  item: undefined,
};
export const G_S_H_2: TileData = {
  id: "grassSandHorizontal",
  texture: textureGrassSandHorizontal2,
  item: undefined,
};

export const G_S_L_D: TileData = {
  id: "grassSandLeftDown",
  texture: textureGrassSandLeftDown,
  item: undefined,
};
export const G_S_L_U: TileData = {
  id: "grassSandLeftUp",
  texture: textureGrassSandLeftUp,
  item: undefined,
};
export const G_S_R_D: TileData = {
  id: "grassSandRightDown",
  texture: textureGrassSandRightDown,
  item: undefined,
};
export const G_S_R_U: TileData = {
  id: "grassSandRightUp",
  texture: textureGrassSandRightUp,
  item: undefined,
};

export const S_G_L_D: TileData = {
  id: "sandGrassLeftDown",
  texture: textureSandGrassLeftDown,
  item: undefined,
};
export const S_G_L_U: TileData = {
  id: "sandGrassLeftUp",
  texture: textureSandGrassLeftUp,
  item: undefined,
};
export const S_G_R_D: TileData = {
  id: "sandGrassRightDown",
  texture: textureSandGrassRightDown,
  item: undefined,
};
export const S_G_R_U: TileData = {
  id: "sandGrassRightUp",
  texture: textureSandGrassRightUp,
  item: undefined,
};


export const G1: TileData = {
  id: "grass1",
  texture: textureGrassFlowers,
  item: undefined,
};
export const V: TileData = { id: "void", texture: textureVoid, item: undefined };
export const W: TileData = {
  id: "water",
  texture: textureWater,
  item: undefined,
};
export const SHU: TileData = {
  id: "shoreUp",
  texture: textureShoreUp,
  item: undefined,
};
export const SHULI: TileData = {
  id: "shoreUpLeftIn",
  texture: textureShoreUpLeftIn,
  item: undefined,
};
export const SHULO: TileData = {
  id: "shoreUpLeftOut",
  texture: textureShoreUpLeftOut,
  item: undefined,
};
export const GT: TileData = {
  id: "grassTree",
  texture: textureGrass,
  item: itemTree,
};
export const H: TileData = {
  id: "grassHouse",
  texture: textureGrassFlowers,
  item: itemTree,
};
export const GS: TileData = {
  id: "grassSasha",
  texture: textureGrass,
  item: itemSasha,
};

const chunk0_0: ChunkData = [
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_1_1,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_1_1,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
];

const chunk1_0: ChunkData = [
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
];

const chunk2_0: ChunkData = [
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
];

const chunk0_1: ChunkData = [
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,SHULI,SHU,SHU,SHU,SHU,SHU,SHULI,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2],
  [SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,W,W,W,W,W,W,W,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

const chunk1_1: ChunkData = [
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G1,G1,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G1,G1,G1,G1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_1,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,S_G_L_U,G_S_H_2,S_G_R_U,G_2_2,G_1_2,S_G_L_U,G_S_H_2,G_S_H,S_G_R_U,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_S_H,G_S_H_2,G_S_H,G_S_H_2,G_S_H,G_S_H_2,G_S_H,G_S_H_2,G_S_R_D,S_2_1,G_S_L_D,G_S_H_2,G_S_H,G_S_R_D,S_2_1,S_1_1,G_S_L_D,G_S_H_2,G_S_H,G_S_H_2,G_S_H,G_S_H_2,G_S_H,G_S_H_2,G_S_H,G_S_H_2,G_S_H,G_S_H_2,G_S_H,G_S_H_2,G_S_H],
  [S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1,S_2_2,S_2_1, SHULI,SHU],
  [SHU,SHU,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,SHULI,SHU,SHULO,W],
  [W,W,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHULO,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

const chunk2_1: ChunkData = [
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1,G_1_1,G_2_1],
  [G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S_1_1,S_2_1,S,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2,G_1_2,G_2_2],
  [S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,SHULI,SHU,SHU,SHU,SHU,SHU,SHU,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2,S_1_2,S_2_2],
  [SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,W,W,W,W,W,W,W,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU,SHU],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

const chunk0_2: ChunkData = [
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
]


const chunk1_2: ChunkData = [
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

const chunk2_2: ChunkData = [
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
];

export const mapTutorialIsland: MapData = [
  [ chunk0_0, chunk1_0, chunk2_0 ],
  [ chunk0_1, chunk1_1, chunk2_1 ],
  [ chunk0_2, chunk1_2, chunk2_2 ]
];
