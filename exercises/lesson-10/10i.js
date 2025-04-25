// Default operator to use default value if calculation is undefined
let calculation = localStorage.getItem("calculation") || "";
displayCalculation();
function updateCalculation(userInput) {
  calculation += userInput;
  displayCalculation();
  console.log(calculation);
  saveCalculation();
}
function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}
function displayCalculation() {
  let paragraphElement = document.querySelector(".js-paragraph");
  paragraphElement.innerHTML = calculation;
}
