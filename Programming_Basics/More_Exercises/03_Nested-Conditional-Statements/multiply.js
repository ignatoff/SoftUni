function multiply(num) {

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let a = Number(num[i]);

        if (a >= 0) {
            sum = a * 2;
            console.log(`Result: ${sum.toFixed(2)}`);
        } else {
            console.log(`Negative number!`);
        }
    }
}

multiply(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);