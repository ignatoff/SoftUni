function integer(a, b, c) {

    let sum = a + b + c;
    let intSum = parseInt(sum);

    if (intSum == sum) {
        console.log(`${sum} - Integer`);

    } else {
        console.log(`${sum} - Float`);

    }
}

integer(9, 100, 1.1);