function toggleButton(selector) {
  let toggleButtonElement = document.querySelector(selector);
  if (!toggleButtonElement.classList.contains("is-toggled")) {
    toggleButtonElement.classList.add("is-toggled");
  } else {
    toggleButtonElement.classList.remove("is-toggled");
  }
}
