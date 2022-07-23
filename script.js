// Operation functions

function add (a, b) {
    a = +a;
    b = +b;
    return a + b;
}

function subtract (a, b) {
    a = +a;
    b = +b;
    return a - b;
}

function multiply (a, b) {
    a = +a;
    b = +b;
    return a * b;
}

function divide (a, b) {
    a = +a;
    b = +b;
    return a / b;
}

// Operate function

function operate (operator, operandOne, operandTwo) {
    switch (operator) {
        case '+':
            return add(operandOne, operandTwo);
            break;
        
        case '-':
            return subtract(operandOne, operandTwo);
        
        case '*':
            return multiply(operandOne, operandTwo);
        
        case '/':
            return divide(operandOne, operandTwo);
        
        default:
            return "ERROR: invalid operator";
    }
}

// interactivity

let displayNumbers = "";
const display = document.getElementById("display");
let operandStack = [0];
let curOperator = "+";
let eqElig = false;

// add functionality to number buttons
const numButtons = document.querySelectorAll('.digit');
for (let btn of numButtons) {
    btn.addEventListener('click', () => {
        // division by 0 not allowed
        if (curOperator === "/" && btn.id === "0") {
            return;
        }
        // multiple periods not allowed
        if (btn.id === "." && displayNumbers.includes(".")){
            return;
        }
        // limit of screen width
        if (displayNumbers.length >= 10) {
            return;
        }
        displayNumbers += btn.id;
        display.textContent = displayNumbers;

        eqElig = true;
    });
}

function evaluate () {
    operandStack.push(displayNumbers);
    let result = operate(curOperator, operandStack[0], operandStack[1]);
    operandStack.shift();
    operandStack.shift();
    operandStack.unshift(result);

    display.textContent = result;
    operandStack = [result];
    displayNumbers = "";
}

// operator buttons functionality
const opButtons = document.querySelectorAll('.operator');
for (let op of opButtons) {
    op.addEventListener('click', () => {
        if (!(op.id === "=")) {
            evaluate();
            
            curOperator = op.id;

            eqElig = false;
        } else {
            if (!eqElig) {
                return;
            }

            evaluate();
            
            operandStack = [0]
            curOperator = '+';
            
            eqElig = false;
        }
    });
}

// clear button functionality
const clear = document.getElementById("clear");
clear.addEventListener('click', () => {
    displayNumbers = "";
    display.textContent = 0;
    operandStack = [0];
    curOperator = '+';
});

// back button functionality
const back = document.getElementById("back");
back.addEventListener('click', () => {
    if (displayNumbers.length > 0) {
        displayNumbers = displayNumbers.slice(0, displayNumbers.length - 1);
        display.textContent = displayNumbers;
    }
});
