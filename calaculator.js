// Objective:
// Perform arithmetic operations with basic JavaScript.
// Features:
// Input fields for two numbers.
// Buttons for operations (Add, Subtract, Multiply, Divide).
// Display the result below the buttons.
// Instructions:
// Use HTML to create two <input> fields for the numbers and buttons for each operation.
// Add a <div> or <p> element to display the result.
// Write JavaScript functions for each operation. Use parseFloat to handle input from the text fields.
// Attach the JavaScript functions to buttons using onclick or addEventListener.

const firstNum = document.getElementById("firstNumber");
const secondNum = document.getElementById("secondNumber");
const result = document.getElementById("result");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const resetBtn = document.getElementById("reset");

addBtn.addEventListener("click", (e) => {
  result.textContent =
    Number.parseFloat(firstNum.value) + Number.parseFloat(secondNum.value);
  return result.textContent;
});

subtractBtn.addEventListener("click", (e) => {
  result.textContent = parseFloat(
    Number(firstNum.value) - Number(secondNum.value)
  );
  return result.textContent;
});

multiplyBtn.addEventListener("click", (e) => {
  result.textContent = parseFloat(
    Number(firstNum.value) * Number(secondNum.value)
  );
  return result.textContent;
});

divideBtn.addEventListener("click", (e) => {
  result.textContent = parseFloat(
    Number(firstNum.value) / Number(secondNum.value)
  );
  return result.textContent;
});

resetBtn.addEventListener("click", (e) => {
  firstNum.value = " ";
  secondNum.value = " ";
  result.textContent = " ";
});
console.log(2 + "2");
