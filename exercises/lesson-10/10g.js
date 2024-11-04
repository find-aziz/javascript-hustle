function toggleButton(selector) {
    let toggleButtonElement = document.querySelector(selector);
    if (!toggleButtonElement.classList.contains("is-toggled")) {
      turnOffButton();
      toggleButtonElement.classList.add("is-toggled");
    } else {
      toggleButton1Element.classList.remove("is-toggled");
    }
  }
  function turnOffButton() {
    const onButton = document.querySelector(".is-toggled");
    if (onButton) {
      onButton.classList.remove("is-toggled");
    }
  }