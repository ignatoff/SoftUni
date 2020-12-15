function sumNumbers(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let magic = Number(input[2]);
    let sum = 0;
    let counter = 0;
    let num1 = 0;
    let num2 = 0;
    let isMagic = false;

    for (let i = a; i <= b; i++) {
        num1 = i;

        for (let j = a; j <= b; j++) {
            num2 = j;
            sum = i + j;
            counter++;

            if (sum == magic) {
                isMagic = true;
                break;
            }
        }

        if (isMagic) break;
    }

    if (isMagic) console.log(`Combination N:${counter} (${num1} + ${num2} = ${magic})`);
    else console.log(`${counter} combinations - neither equals ${magic}`);
}

sumNumbers([
    "1",
    "10",
    "5"
]);