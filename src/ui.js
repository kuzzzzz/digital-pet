export const modFox = function modFox(state){
  document.querySelector('.fox').className = `fox fox-${state}`;

};

export const modScene = function modScence(state){
  document.querySelector('.game').className = `game ${state}`;

};
export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".pop-bag").classList.toggle('hidden',!show);
};
