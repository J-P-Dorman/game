export type PlayerChoice = {
  text: string; // The text displayed in the dialogue option
  nextOptionKey?: string; // The key for the dialogue option to trigger from this response
  onChoose?: () => DialogueOption // Do something extra when the user chooses this dialogue option
};

export type DialogueOption = {
    // The list of dialogue the npc speaks to the player
    messages: Array<{
      text: string; // The text the npc speaks in this slide
      imageKey: string; // The id of the npc image to accompany the text
      effect?: string; // A preset list of special effects, for example shaking the screen when a character shouts
      onNext?: () => void; // Do something extra when the user moves to the next slide
    }>,
    // The responses the player has when the npc stops their paragraph
    playerResponses?: PlayerChoice[];
    nextOptionKey?: string; // If there are no choices, put a key here to lead into the next option
    onEnd?: () => any;
  };
  
  export type DialogueOptions = Record<string, DialogueOption>;