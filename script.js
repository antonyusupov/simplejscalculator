const screenDisplay = document.querySelector('.display-container');
const buttons = document.querySelectorAll('button');

let calculation = [];
let stringCalculation ='';

function calculate(button) {
    const value = button.textContent;

    if(value === 'CLEAR') {
        calculation = []
        stringCalculation = '';
        screenDisplay.textContent = '0';
    }else if (value === '=') {
        try {
            screenDisplay.textContent = eval(stringCalculation)
        }catch (error) {
            calculation = []
            screenDisplay.textContent = 'ERROR';
        }
    }else {
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            // Check if the last element in the calculation array is an operator
            if (calculation.length > 0 && (calculation[calculation.length - 1] === '+' || calculation[calculation.length - 1] === '-' || calculation[calculation.length - 1] === '*' || calculation[calculation.length - 1] === '/')) {
              // Do not push the operator button if the last element is an operator
              return;
            }
          }
        calculation.push(value);
        stringCalculation = calculation.join('');
        screenDisplay.textContent = stringCalculation;
    }

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));