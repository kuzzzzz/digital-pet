import { ICONS } from "./constants.js";

const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;
  function selectIcon(index) {
    toggleHighlighted(selectedIcon, false);
    selectedIcon = index;
    toggleHighlighted(selectedIcon, true);
  }

  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      selectIcon((2 + selectedIcon) % ICONS.length);
    } else if (target.classList.contains("right-btn")) {
      selectIcon((1 + selectedIcon) % ICONS.length);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick);

  // Kid-friendly touch shortcut: tapping an icon directly selects AND
  // activates it in one go, instead of needing left/right to cycle first.
  document.querySelectorAll(".icon").forEach((iconEl, index) => {
    iconEl.addEventListener("click", () => {
      selectIcon(index);
      handleUserAction(ICONS[index]);
    });
  });
}
