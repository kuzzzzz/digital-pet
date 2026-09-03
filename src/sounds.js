// Tiny, dependency-free chiptune-style sound effects using the Web Audio API.
// No audio files needed, so it stays lightweight and works offline.

let audioCtx;
function getCtx() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  // Browsers suspend the context until a user gesture; button/tap clicks
  // count, so just try to resume every time we play something.
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function beep({ freq = 440, duration = 0.15, type = "square", volume = 0.15, delay = 0 }) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
  gain.gain.setValueAtTime(volume, ctx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration);
}

export function playHatch() {
  [392, 523.25, 659.25].forEach((freq, i) =>
    beep({ freq, duration: 0.15, delay: i * 0.12, type: "sine" })
  );
}

export function playFeed() {
  beep({ freq: 523.25, duration: 0.1 });
  beep({ freq: 659.25, duration: 0.12, delay: 0.1 });
}

export function playPet() {
  beep({ freq: 880, duration: 0.08, type: "sine", volume: 0.12 });
}

export function playPoopClean() {
  beep({ freq: 220, duration: 0.1, type: "triangle" });
  beep({ freq: 330, duration: 0.1, type: "triangle", delay: 0.08 });
}

export function playCelebrate() {
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) =>
    beep({ freq, duration: 0.12, delay: i * 0.09, type: "square" })
  );
}

export function playSad() {
  beep({ freq: 392, duration: 0.25, type: "sawtooth", volume: 0.1 });
  beep({ freq: 293.66, duration: 0.35, type: "sawtooth", volume: 0.1, delay: 0.25 });
}
