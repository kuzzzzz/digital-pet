import initButtons from './buttons';

import game,{handleUserAction, petAction} from "./gameState";

import {TICK_RATE} from './constants';

async function init() {
  initButtons(handleUserAction)
  document.querySelector(".fox").addEventListener("click", petAction);
  console.log("Starting game");

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
