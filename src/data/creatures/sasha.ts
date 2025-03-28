import spriteSheet from "../../assets/sprites/creatures/sasha/sasha.svg";
import { CreatureData } from "../../types";
import imageAngry from '../../assets/images/creatures/sasha/sasha_angry.png';
import imageHappy from '../../assets/images/creatures/sasha/sasha_laugh.png';
import imageSad from '../../assets/images/creatures/sasha/sasha_sad.png';
import imageDefault from '../../assets/images/creatures/sasha/sasha_default.png';
import imageConfused from '../../assets/images/creatures/sasha/sasha_confused.png';
import imageLaugh from '../../assets/images/creatures/sasha/sasha_laugh.png';
import { DialogueOptions } from './types';
import { AttachToCamera, FitToCamera } from "../../views/Game/components/Camera/types";

// TODO: split dialogue into different exported objects depending what
// level the player is on
export const dialogueOptionsSasha: DialogueOptions = {
  start: {
    messages: [{
      text: 'Hi! This is a nice beach, isn\'t it?',
      imageKey: 'default',
    }],
    playerResponses: [
      { text:'Not really...', nextOptionKey: 'iSuppose' },
      { text: 'Yeah!', nextOptionKey: 'right' }
    ]
  },
  iSuppose: {
    messages: [{
      text: 'Oh, okay. I suppose the beach isn\'t for everyone. What about those flowers over there?',
      imageKey: 'confused',
    }],
    playerResponses: [
      { text: 'I don\'t like them...', nextOptionKey: 'bruh' },
      { text: 'Those are nice I guess', nextOptionKey: 'iSuppose' }
    ]
  },
  bruh: {
    messages: [{
      text: 'Bruh. Who doesn\'t like flowers?? Are you broken or something?',
      imageKey: 'angry',
      effect: 'shake_small',
    }],
    playerResponses: [
      { text: 'Yeah, maybe?', nextOptionKey: 'ohMan' },
      { text: 'Whoah, sorry..', nextOptionKey: 'intro' }
    ]
  },
  ohMan: {
    messages: [{
      text: 'Oh man, okay this got heavy.. Let\'s start again.',
      imageKey: 'sad',

    }],
    nextOptionKey: 'intro',
    onEnd: () => {}
  },
  betterBe: {
    messages: [{
      text: 'Yeah, you better be! Flowers are cool as hell!',
      imageKey: 'happy',
 
    }],
    nextOptionKey: 'intro',
    onEnd: () => {}
  },
  damnRight: {
    messages: [{
      text: 'Damn right! Flowers are cool as hell!',
      imageKey: 'happy',
   
    }],
    nextOptionKey: 'intro',
    onEnd: () => {}
  },
  right: {
    messages: [
      {
        text: 'Right?? This place is great!',
        imageKey: 'happy',
        effect: 'flowers'
      },
      {
        text: 'Always so peaceful to come out here and feel the breeze... Oh! By the way..',
        imageKey: 'happy',
        effect: 'flowers'
      }
    ],
    nextOptionKey: 'intro',
    onEnd: () => {}
  },
  intro: {
    messages: [
      {
        text: 'I\'m Sasha, what\'s your name?',
        imageKey: 'default',
        onNext: () => { console.log('Name input goes here!') }
      },
      {
        text: 'Kidding, that feature hasn\'t been added yet!',
        imageKey: 'laugh',
      }
    ],
    onEnd: () => { window.state.flags.hasSpokenToSasha = true }
  }
};

export const sashaData: CreatureData = {
  id: "sasha",
  size: 1.5,
  spriteSheet: {
    image: spriteSheet,
    spriteWidth: 20,
    spriteHeight: 30,
    sheetWidth: 60,
    sheetHeight: 240,
    defaultSprite: 'turnDown',
    sheetMap: [
      ["turnDown", "walkDown", "walkDown2"],
      ["turnUp", "walkUp", "walkUp2"],
      ["turnLeft", "walkLeft"],
      ["turnRight", "walkRight"],
      ["turnDownLeft", "walkDownLeft"],
      ["turnDownRight", "walkDownRight"],
      ["turnUpLeft", "walkUpLeft"],
      ["turnUpRight", "walkUpRight"],
    ],
    animationMap: {
      walkDown: {
        frames: ["walkDown", "walkDown2"],
        end: "turnDown",
      },
      walkUp: {
        frames: ["walkUp", "walkUp2"],
        end: "turnUp",
      },
      walkLeft: {
        frames: ["walkLeft", "turnLeft"],
        end: "turnLeft",
      },
      walkRight: {
        frames: ["walkRight", "turnRight"],
        end: "turnRight",
      },
      walkDownLeft: {
        frames: ["walkDownLeft", "turnDownLeft"],
        end: "turnDownLeft",
      },
      walkDownRight: {
        frames: ["walkDownRight", "turnDownRight"],
        end: "turnDownRight",
      },
      walkUpLeft: {
        frames: ["walkUpLeft", "turnUpLeft"],
        end: "turnUpLeft",
      },
      walkUpRight: {
        frames: ["walkUpRight", "turnUpRight"],
        end: "turnUpRight",
      }
    }
  },
  images: {
    default: imageDefault,
    happy: imageHappy,
    sad: imageSad,
    angry: imageAngry,
    confused: imageConfused,
    laugh: imageLaugh
  }
};
