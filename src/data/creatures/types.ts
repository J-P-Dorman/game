export type DialogueOption = {
    // The list of dialogue the npc speaks to the player
    messages: Array<{
      text: string; // The text the npc speaks in this slide
      imageKey: string; // The id of the npc image to accompany the text
      effect?: string; // A preset list of special effects, for example shaking the screen when a character shouts
      onNext?: () => void; // Do something extra when the user moves to the next slide
    }>,
    // The responses the player has when the npc stops their paragraph
    playerResponses?: Array<{
      text: string; // The text displayed in the dialogue option
      onChoose: () => DialogueOption // Do something extra when the user chooses this dialogue option
    }>;
    onEnd?: () => any;
  };
  
  export type DialogueOptions = Record<string, DialogueOption>;