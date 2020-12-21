function operations(num1, num2, operator) {

    num1 = Number(num1);
    num2 = Number(num2);
    let sum;

    switch (operator) {
        case "+": sum = num1 + num2;
            if (sum % 2 == 0) {
                console.log(`${num1} ${operator} ${num2} = ${sum} - even`);

            } else {
                console.log(`${num1} ${operator} ${num2} = ${sum} - odd`);

            } break;
        case "-": sum = num1 - num2;
            if (sum % 2 == 0) {
                console.log(`${num1} ${operator} ${num2} = ${sum} - even`);

            } else {
                console.log(`${num1} ${operator} ${num2} = ${sum} - odd`);

            } break;
        case "*": sum = num1 * num2;
            if (sum % 2 == 0) {
                console.log(`${num1} ${operator} ${num2} = ${sum} - even`);

            } else {
                console.log(`${num1} ${operator} ${num2} = ${sum} - odd`);

            } break;
        case "/": sum = num1 / num2;
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);

            } else {
                console.log(`${num1} ${operator} ${num2} = ${sum.toFixed(2)}`);

            } break;
        case "%": sum = num1 % num2;
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);

            } else {
                console.log(`${num1} ${operator} ${num2} = ${sum}`);

            } break;

    }
}

operations("10", "7", "%");
