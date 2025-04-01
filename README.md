# JavaScript Game engine

This project uses WebGL through Three.js to render a top down 2D game

## Getting Started

This project uses pnpm
https://pnpm.io

```
pnpm i && pnpm run serve
```


# Working with the action queues
The engine runs off two arrays, or "queues" under `window.state` that constantly invoke on an interval any callback functions you add to them.


## Logic Queue
Deals mostly with the CPU. This queue runs at a fixed speed of 20ms (also known as a "tick") and is where you should update any numerical values such as player position, player state, npc position, game flags etc.


Once your numerical values are updated, you can then render the updated value to screen using the...


## Render Queue
Deals mostly with the GPU, it utilises THREE.js as syntactic sugar for the WebGL API. This queue changes speed depending on the max fps the player has selected.


Here you can read the values the logic queue has changed and render the result to the screen.


## Why two queues?
If we did everything in the logic queue, the frame rate could never change, as this queue runs at a fixed interval. This would unnecessarily drain battery from mobile devices and make the game unplayable on weaker devices, as we would have to do very large amounts of compute work every 20ms.


On the other hand, consider a situation where we did everything in the render queue. A faster frame rate would not only render more frames, but the player would actually get a faster run speed the higher we set the fps, as we would be updating the values more times a second.


## Why use queues at all?
Games are not as event driven as the web. Many things have to happen x times a second, regardless of user input. For example a walking NPC has to take x steps and move y distance in z seconds, all without user input.


We could use individual setIntervals all over the place, but that would become a nightmare to manage when you want to (for example) stop an npc from walking when the player tries to talk to them.


Queues are a scalable solution that allow all parts of the game to affect each other without passing callbacks between components like a messy server rack.


## Adding things to queues
As an example, let's say we want to get an NPC walking around. We'll call this character "Sarah". We can add a logic action to the logic queue that updates their position x amount every tick and a render action to the render queue that outputs their new position to the screen whenever a new frame is ready.


We can create and use that action like so:
``` js
import { createLogicAction, dispatchLogic } from 'PATH_GOES_HERE';
import { createRenderAction, dispatchRender } from 'PATH_GOES_HERE';

const state = {
    position: { x: 0, y: 0 };
}

// Kick everything off from this line
// Move the NPC "Sarah" right 0.1, and up 0 every tick
dispatchLogic(logicNpcMove, ['Sarah', 0.1, 0]);

const logicNpcMove = createLogicAction({
    id: "npcMove",
    func: ({ action }) => {
        const [npcName, speedX, speedY] = action.payload;

        state.position.x += speedX;
        state.position.y += speedY;

        // Start rendering the new position
        dispatchRender(renderNpcMove, [npcName]);
    },
    repeat: true // Don't just nudge NPC once, keep moving constantly
});

const renderNpcMove = createRenderAction({
    id: "npcMove",
    func: ({ action }) => {
        const { x, y } = state.position;

        // THREE.js code goes here
        // Use x and y to update position of NPC on screen
    },
    repeat: true, // Don't just render the first step of the animation
    maxTime: 200 // Move to the next frame of animation every 200ms
    stack: false // For a simple example don't allow multiple NPCs to move at once
});
```


## Removing things from queues
As an example, let's say there is an NPC walking around and the player tries to talk to them. We need a way to cancel that NPC's walking so they can stop and chat.


We can use removeAllFrom[Render/Logic]Queue() to remove actions by id like so:
```
removeAllFromLogicQueue('npcWalk')
removeAllFromRenderQueue('npcWalk')
```
But this will stop every walking npc in the game. We need to further specify.


We can use the parameters of the action to get more specific. For example, say the player wants to talk to the NPC "Sarah". When we 