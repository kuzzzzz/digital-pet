import initButtons from './buttons';

import game from "./gameState";

import {TICK_RATE} from './constants';

async function init() {
  initButtons(game.handleUserAction)
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
