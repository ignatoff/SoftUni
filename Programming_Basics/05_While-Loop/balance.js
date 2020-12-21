function solve(input) {

    let index = 0;
    let data = input[index];
    let sum = 0;
    index++;

    while (data !== "NoMoreMoney") {
        let num = Number(data);
        if (data < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${num.toFixed(2)}`);
        sum += num;
        data = input[index];
        index++;

    }
    console.log(`Total: ${sum.toFixed(2)}`);

}

solve(["120",
    "45.55",
    "-150"]);
