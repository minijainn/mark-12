const answerInput = document.getElementsByClassName("option");
const submitButton = document.getElementById("submit");
const dynamicText = document.getElementById("dynamic-text");

const answers = [
  "90",
  "Right angle",
  "one right angle",
  "12,16,20",
  "Equilateral"
];
let score = 0;

submitButton.addEventListener("click", submit);

function submit() {
  for (let i = 0; i < answerInput.length; i++) {
    if (answerInput[i].checked) {
      if (answers.includes(answerInput[i].value)) {
        score += 1;
      }
    }
    dynamicText.innerText = "Your score is:" + score;
  }
}
