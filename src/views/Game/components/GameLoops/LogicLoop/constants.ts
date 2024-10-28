import { State } from "../../../../../types";

declare global {
    interface Window {
      state: State;
      scene: any;
    }
  }

export const logicActions = {
    'movePlayerDown': {
        id: 'walkPlayerDown',
        func: (speed: number) => {
            window.state.playerPosition.y -= speed;
        },
        repeat: true,
        stack: false,
        payload: [],
        pause: false,
        time: 0,
        maxTime: 1500,
      },
      'movePlayerUp': {
        id: 'walkPlayerUp',
        func: (speed: number) => {
            window.state.playerPosition.y += speed;
        },
        repeat: true,
        stack: false,
        payload: [],
        pause: false,
        time: 0,
        maxTime: 1500,
      },
      'movePlayerLeft': {
        id: 'walkPlayerLeft',
        func: (x: number) => {
            window.state.playerPosition.x -= x;
        },
        repeat: true,
        stack: false,
        payload: [],
        pause: false,
        time: 0,
        maxTime: 1500,
      },
      'movePlayerRight': {
        id: 'walkPlayerRight',
        func: (x: number) => {
            window.state.playerPosition.x -= x;
        },
        repeat: true,
        stack: false,
        payload: [],
        pause: false,
        time: 0,
        maxTime: 1500,
      },
      'movePlayerLeftDown': {
        id: 'walkPlayerLeftDown',
        func: (x, y) => {
            window.state.playerPosition.x -= x;
            window.state.playerPosition.y -= y;
        },
        repeat: true,
        stack: false,
        payload: [],
        pause: false,
        time: 0,
        maxTime: 1500,
      },
      'movePlayerLeftUp': {
        id: 'walkPlayerLeftUp',
        func: (x, y) => {
            window.state.playerPosition.x -= x;
            window.state.playerPosition.y += y;
        },
        repeat: true,
        stack: false,
        payload: [],
        pause: false,
        time: 0,
        maxTime: 1500,
      },
}