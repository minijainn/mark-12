const base = document.getElementById("base");
const height = document.getElementById("height");
const calculate = document.getElementById("calculate");
const dynamicText = document.getElementById("dynamic-text");

calculate.addEventListener("click", area);

function area() {
  const baseInput = parseFloat(base.value);
  const heightInput = parseFloat(height.value);
  if (baseInput < 0 && heightInput < 0) {
    alert("Base and Height can't be negative");
  } else {
    dynamicText.innerText = "The area is:" + (baseInput * heightInput) / 2;
  }
}
