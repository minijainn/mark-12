const angle1 = document.getElementById("angle1");
const angle2 = document.getElementById("angle2");
const angle3 = document.getElementById("angle3");
const checkIsTriangle = document.getElementById("checkIsTriangle");
const dynamicTextIsTriangle = document.getElementById("dynamic-text");

checkIsTriangle.addEventListener("click", checkFunc);

function checkFunc() {
  const angle1Input = parseInt(angle1.value);
  const angle2Input = parseInt(angle2.value);
  const angle3Input = parseInt(angle3.value);
  if (angle1Input + angle2Input + angle3Input === 180) {
    dynamicTextIsTriangle.innerText = "Yes it forms a triangle";
  } else {
    dynamicTextIsTriangle.innerText = "It does not form a triangle";
  }
}
