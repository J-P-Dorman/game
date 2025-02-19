export type ItemData = {
  width: number; // Width of item in game world, in abstract THREE units
  height: number; // Height of item in game world, in abstract THREE units
  spriteSheet: {
    image: string; // Link to spritesheet image (should be an svg)
    spriteWidth: number; // Width of each sprite
    spriteHeight: number; // Height of each sprite
    sheetWidth: number; // Total width of sheet in px
    sheetHeight: number; // Total height of sheet in px
    defaultSprite: string; // Name of sprite to display by default
    defaultAnimation?: string; // Name of animation to play by default
    sheetMap: string[][]; // Assign ids to each sprite based on sheet position, first array is the sheet, second array is the row
    animationMap: {
      water: {
        // Animation name
        frames: string[]; // Chronological ids of frames to grab from the spritesheet for the animation
        fps: 3; // Frames to show per second, controls animation speed
        loop: true; // Should animation infinitely loop
        end?: string; // What frame to display when the animation ends
      };
    };
  };
  onInteract: () => void; // What to do when the player interacts with the object
};

export type LevelItem = ItemData & {
  id: string,
  position: [x: number, y: number],
}
