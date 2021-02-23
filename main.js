let calculation = []; //<- empty array
console.log(calculation);

function pushNumber(event) {
  alert(event.target.value)
  calculation.push(event.target.value);
  console.log(calculation);
}

const buttonElements = document.querySelectorAll('button.number');
buttonElements.forEach(function(button) {
  button.addEventListener('click', pushNumber, );
});

function pushOperator(event) {
  alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
}
const operatorElements = document.querySelectorAll('button.operator');
operatorElements.forEach(function(operator) {
  operator.addEventListener('click', pushOperator);
});
const equalsElement = document.querySelector('button.equal-sign');
const clearElement = document.querySelectorAll('button.clear')

function pushEqual(event) {
  let num1 = ''
  let num2 = ''
  let operator;
  let result;
  for (let i = 0; i < calculation.length; i++) {
    if(['+','-','/','*'].includes(calculation[i])) {
      operator = calculation[i];
    } else if (operator) {
      num2 += calculation[i];
    } else {
      num1 += calculation[i];
    }
  }

  if (operator === '+') {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === '-') {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === '*') {
    result = parseFloat(num1) * parseFloat(num2);
  } else {
    result = parseFloat(num1) / parseFloat(num2);
  }
  alert(result);
}
equalsElement.addEventListener('click', pushEqual)

function pushClear(event) {
  alert(event.target.value);
  calculation.push(event.target.value)
  console.log(calculation);
}
clearElement.forEach(function(clear) {
  clear.addEventListener('click', pushClear); 
});
