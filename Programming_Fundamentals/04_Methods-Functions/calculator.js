function calculator(x, y, operator) {

    let result = 0;
    switch (operator) {
        case 'multiply': result = x * y;
            break;
        case 'divide': result = x / y;
            break;
        case 'add': result = x + y;
            break;
        case 'subtract': result = x - y;
            break;
    }
    console.log(result);
    
}

calculator(5, 5, 'multiply');