import spriteSheet from "../../assets/sprites/creatures/sasha/sasha.svg";
import { CreatureData } from "../../types";
import imageAngry from '../../assets/images/creatures/sasha/sasha_angry.png';
import imageHappy from '../../assets/images/creatures/sasha/sasha_laugh.png';
import imageSad from '../../assets/images/creatures/sasha/sasha_sad.png';
import imageTalking from '../../assets/images/creatures/sasha/sasha_default.png';
import { DialogueOptions } from './types';

// TODO: split dialogue into different exported objects depending what
// level the player is on
export const dialogueOptionsSasha: DialogueOptions = {
  hello: {
    messages: [{
      text: 'Hi! This is a nice beach, isn\'t it?',
      image: imageTalking,
    }],
    playerResponses: [
      { text:'Not really...', onChoose: function () { return this.iSuppose }},
      { text: 'Yeah!', onChoose: function () { return this.right } }
    ]
  },
  iSuppose: {
    messages: [{
      text: 'Oh, okay. I suppose the beach isn\'t for everyone. What about those flowers over there?',
      image: imageSad,
    }],
    playerResponses: [
      { text: 'I don\'t like them...', onChoose: () => dialogueOptionsSasha.bruh },
      { text: 'Those are nice I guess', onChoose: () => dialogueOptionsSasha.iSuppose }
    ]
  },
  bruh: {
    messages: [{
      text: 'Bruh. Who doesn\'t like flowers?? Are you broken or something?',
      image: imageAngry,
      effect: 'shake_small',
    }],
    playerResponses: [
      { text: 'Yeah, maybe?', onChoose: () => dialogueOptionsSasha.ohMan },
      { text: 'Whoah, sorry..', onChoose: () => dialogueOptionsSasha.intro }
    ]
  },
  ohMan: {
    messages: [{
      text: 'Oh man, okay this got heavy.. Let\'s start again.',
      image: imageSad,

    }],
    onEnd: () => dialogueOptionsSasha.intro
  },
  betterBe: {
    messages: [{
      text: 'Yeah, you better be! Flowers are cool as hell!',
      image: imageHappy,
 
    }],
    onEnd: () => dialogueOptionsSasha.intro
  },
  damnRight: {
    messages: [{
      text: 'Damn right! Flowers are cool as hell!',
      image: imageHappy,
   
    }],
    onEnd: () => dialogueOptionsSasha.intro
  },
  right: {
    messages: [
      {
        text: 'Right?? This place is great!',
        image: imageHappy,
        effect: 'flowers'
      },
      {
        text: 'Always so peaceful to come out here and feel the breeze... Oh! By the way..',
        image: imageHappy,
        effect: 'flowers'
      }
    ],
    onEnd: () => dialogueOptionsSasha.intro
  },
  intro: {
    messages: [
      {
        text: 'I\'m Sasha, what\'s your name?',
        image: imageTalking,
        onNext: () => { console.log('Name input goes here!') }
      },
      {
        text: 'Kidding, that feature hasn\'t been added yet!',
        image: imageTalking,
      }
    ],
    playerResponses: [],
    onEnd: () => { window.state.flags.hasSpokenToSasha = true }
  }
};

export const sashaData: CreatureData = {
  id: "sasha",
  width: 1.8,
  height: 1.6,
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
        frames: ["walkUpight", "turnUpRight"],
        end: "turnUpRight",
      }
    }
  },
  onInteract: () => {}
};
