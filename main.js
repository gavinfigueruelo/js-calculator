const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
let calculatorDisplay = document.querySelector('.calculator-screen');

function pushNumber(num) {
  console.log(num.target.value)
  if (calculatorDisplay.value == 0) {
    calculatorDisplay.value = num.target.value;
  } else {
    calculatorDisplay.value = calculatorDisplay.value + num.target.value;
  };
};
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', pushNumber);
};

let operator;
let num1 = 0;
let num2;
let result;

function pushOperator(op) {
  console.log(num1);
  console.log(op.target.value);
	operator = op.target.value;
  num1 = Number(calculatorDisplay.value);
	calculatorDisplay.value = "";
};
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', pushOperator);
};

function calculate() {
  if (operator === '+') {
    num2 = Number(calculatorDisplay.value);
    let result = num1 + num2;
    calculatorDisplay.value = result;
  } else if (operator === '-') {
    num2 = Number(calculatorDisplay.value);
    let result = num1 - num2;
    calculatorDisplay.value = result;
  } else if (operator === '*') {
    num2 = Number(calculatorDisplay.value);
    let result = num1 * num2;
    calculatorDisplay.value = result;
  } else if (operator === '/') {
    num2 = Number(calculatorDisplay.value);
    let result = num1 / num2;
    calculatorDisplay.value = result;
  };
};
const equalButton = document.querySelector('.equal-sign');
equalButton.addEventListener("click", calculate);
