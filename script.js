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