function handleCostKeydown(event) {
    if (event.key === "Enter") {
      calculateTotal();
    }
  }
  function calculateTotal() {
    let inputElement = document.querySelector(".js-cost-input");
    let cost = Number(inputElement.value) * 100;
    if (cost < 0) {
      document.querySelector(".js-total-cost").classList.add("warning");
      document.querySelector(
        ".js-total-cost"
      ).innerHTML = `Error: cost cannot be less than $0`;
      return;
    } else {
      document.querySelector(".js-total-cost").classList.remove("warning");
    }
    if (cost < 4000) {
      cost += 1000;
    }
    document.querySelector(".js-total-cost").innerHTML = `$${cost / 100}`;
  }