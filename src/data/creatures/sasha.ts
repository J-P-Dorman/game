import spriteSheet from "../../assets/sprites/creatures/sasha/sasha.svg";
import { CreatureData } from "../../types";
import imageAngry from '../../assets/sprites/creatures/sasha/chat/sasha_angry.png';
import imageHappy from '../../assets/sprites/creatures/sasha/chat/sasha_happy.png';
import imageSad from '../../assets/sprites/creatures/sasha/chat/sasha_sad.png';
import imageTalking from '../../assets/sprites/creatures/sasha/chat/sasha_talking.png';
import { DialogueOptions } from './types';


const dialogueOptions: DialogueOptions = {
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
      { text: 'I don\'t like them...', onChoose: () => dialogueOptions.bruh },
      { text: 'Those are nice I guess', onChoose: () => dialogueOptions.iSuppose }
    ]
  },
  bruh: {
    messages: [{
      text: 'Bruh. Who doesn\'t like flowers?? Are you broken or something?',
      image: imageAngry,
      effect: 'shake_small',
    }],
    playerResponses: [
      { text: 'Yeah, maybe?', onChoose: () => dialogueOptions.ohMan },
      { text: 'Whoah, sorry..', onChoose: () => dialogueOptions.intro }
    ]
  },
  ohMan: {
    messages: [{
      text: 'Oh man, okay this got heavy.. Let\'s start again.',
      image: imageSad,

    }],
    onEnd: () => dialogueOptions.intro
  },
  betterBe: {
    messages: [{
      text: 'Yeah, you better be! Flowers are cool as hell!',
      image: imageHappy,
 
    }],
    onEnd: () => dialogueOptions.intro
  },
  damnRight: {
    messages: [{
      text: 'Damn right! Flowers are cool as hell!',
      image: imageHappy,
   
    }],
    onEnd: () => dialogueOptions.intro
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
    onEnd: () => dialogueOptions.intro
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
    sheetWidth: 80,
    sheetHeight: 150,
    defaultSprite: 'turnDown',
    sheetMap: [
      [
        "turnDown",
        "turnUp",
        "turnLeft",
        "turnRight"
      ],
      ["walkDown", "walkDown2"],
      ["walkUp", "walkUp2"],
      ["walkLeft", "walkLeft2"],
      ["walkRight", "walkRight2"],
      ["runDown", "runDown2"],
      ["runUp", "runUp2"],
      ["runLeft", "runLeft2"],
      ["runRight", "runRight2"],
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
        frames: ["walkLeft", "walkLeft2"],
        end: "turnLeft",
      },
      walkRight: {
        frames: ["walkRight", "walkRight2"],
        end: "turnRight",
      }
    }
  },
  dialogue: dialogueOptions,
  onInteract: () => {}
};
