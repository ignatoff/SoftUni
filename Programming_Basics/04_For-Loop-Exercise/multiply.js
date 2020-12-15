function multiply(num) {

    num = Number(num);
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = i * num;
        console.log(`${i} * ${num} = ${sum}`);

    }

}

multiply("16");