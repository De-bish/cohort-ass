const calculate = (num1, num2, operation) => {
    
    if (num1 == null || num2 == null) {
        return 'Error: Both numbers must be provided.';
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Error: Both inputs must be numbers.';
    }
    const validOperations = ['add', 'subtract', 'multiply', 'divide'];
    if (!validOperations.includes(operation)) {
        return 'Error: Invalid operation. Please use "add", "subtract", "multiply", or "divide".';
    }

    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero is not allowed.';
        default:
            return 'Error: Unknown operation.';
    }
};

console.log(calculate(10, 5, 'add'));       
console.log(calculate(10, 5, 'subtract'));   
console.log(calculate(10, 5, 'multiply'));   
console.log(calculate(10, 0, 'divide'));     
console.log(calculate(10, 5, 'modulus'));     
