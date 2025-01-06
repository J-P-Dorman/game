import { CreatureData } from "../types";
import spriteSheet from "../assets/sprites/creatures/player.svg";

export const playerData: CreatureData = {
  id: "player",
  defaultState: "turnDown",
  spriteSheet: {
    image: spriteSheet,
    frameWidth: 20,
    frameHeight: 30,
    sheetWidth: 160,
    sheetHeight: 510,
  },
  states: {
    turnDown: {
      coordinates: { x: 0, y: 0 },
    },
    turnUp: {
      coordinates: { x: 0, y: 0 },
    },
    turnLeft: {
      coordinates: { x: 0, y: 0 },
    },
    turnRight: {
      coordinates: { x: 0, y: 0 },
    },
    turnDownLeft: {
      coordinates: { x: 0, y: 0 },
    },
    turnUpLeft: {
      coordinates: { x: 0, y: 0 },
    },
    turnDownRight: {
      coordinates: { x: 0, y: 0 },
    },
    turnUpRight: {
      coordinates: { x: 0, y: 0 },
    },
    walkUp1: {
      coordinates: { x: 0, y: 0 },
    },
    walkUp2: {
      coordinates: { x: 0, y: 0 },
    },
    walkDown1: {
      coordinates: { x: 0, y: 0 },
    },
    walkDown2: {
      coordinates: { x: 0, y: 0 },
    },
    walkLeft1: {
      coordinates: { x: 0, y: 0 },
    },
    walkLeft2: {
      coordinates: { x: 0, y: 0 },
    },
    walkRight1: {
      coordinates: { x: 0, y: 0 },
    },
    walkRight2: {
      coordinates: { x: 0, y: 0 },
    },
    walkUpRight1: {
      coordinates: { x: 0, y: 0 },
    },
    walkUpRight2: {
      coordinates: { x: 0, y: 0 },
    },
    walkDownRight1: {
      coordinates: { x: 0, y: 0 },
    },
    walkDownRight2: {
      coordinates: { x: 0, y: 0 },
    },
    walkUpLeft1: {
      coordinates: { x: 0, y: 0 },
    },
    walkUpLeft2: {
      coordinates: { x: 0, y: 0 },
    },
    walkDownLeft1: {
      coordinates: { x: 0, y: 0 },
    },
    walkDownLeft2: {
      coordinates: { x: 0, y: 0 },
    },
  },
};
