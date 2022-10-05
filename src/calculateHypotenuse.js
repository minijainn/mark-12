const side1 = document.getElementById("side1");
const side2 = document.getElementById("side2");
const calculate = document.getElementById("calculate");
const dynamicText = document.getElementById("dynamic-text");

calculate.addEventListener("click", area);

function area() {
  const side1Input = parseFloat(side1.value);
  const side2Input = parseFloat(side2.value);
  dynamicText.innerText =
    "The length of hypotenuse is:" +
    Math.sqrt(Math.pow(side1Input, 2) + Math.pow(side2Input, 2));
}
