
// Say hello let'us build a calculator
// alert("Hello there, let'us build a calculator");

// const buttons = document.querySelectorAll('button');

// const string = '';

// const container = document.getElementsByClassName('calculator');
// const call = document.getElementById('call');
// let calcul = (number)=> {
//     call.value = call.value+number;
// }

// function calculate(input) {
//     call.value += input;
// }

// function del() {
//     call.value = '';
// }

// function equal() {
//     call.value = eval(call.value);
// }

alert("Heloo, try to do some math calculation here! \n Let's gooo! ");
const num1 = Number(prompt('Enter your first NR.: '));
const operation = prompt('Enter any operator (+, -, *, /, **, %	) ');
const num2 = Number(prompt('Enter your second NR: '));

while (isNaN(num1) || isNaN(num2)) {
    num1 = Number(
    prompt('You entered an invalid first number, please enter any number:'),
    );
    num2 = Number(
    prompt(
    'You entered an invalid second number, please enter again any number:',
    ),
    );
}

let result;

if (operation === '+') {
  result = num1 + num2;
} else if (operation === '-') {
  result = num1 - num2;
} else if (operation === '*') {
  result = num1 * num2;
} else if (operation === '/') {
  result = num1 / num2;
} else if (operation === '**') {
  result = num1 ** num2;
} else if (operation === '%') {
  result = num1 % num2;
} else {
  result = 'Invalid operator, enter an arithmetic operator';
}

alert(`the result is "${result}"`);
