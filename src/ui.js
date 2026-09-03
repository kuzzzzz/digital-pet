export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

export const modScene = function modScence(state) {
  document.querySelector(".game").className = `game ${state}`;
};
export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};
export const writeModal = function writeModal(text = "") {
  document.querySelector(".modal").innerHTML = `<div class="modal-inner">${text}</div>`;
};

// Kid-friendly juice: tapping the pet bounces it and pops a couple of hearts,
// without touching the underlying sprite/state system above.
export const petFox = function petFox() {
  const fox = document.querySelector(".fox");
  fox.classList.remove("pet-bounce");
  // Force a reflow so the animation restarts even on rapid re-taps.
  void fox.offsetWidth;
  fox.classList.add("pet-bounce");
  spawnHearts(fox);
};

export const spawnHearts = function spawnHearts(fox) {
  const target = fox || document.querySelector(".fox");
  const count = 3;
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    heart.textContent = "❤";
    heart.style.left = `${20 + Math.random() * 60}%`;
    heart.style.animationDelay = `${i * 0.12}s`;
    target.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
};
