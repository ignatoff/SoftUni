function solve(input) {

    let index = 0;
    let sum = Number(input[index]);
    let coins = 0;

    while (sum > 0) {

        if (sum >= 2) {
            sum -= 2.00;
            coins++;
        } else if (sum >= 1) {
            sum -= 1.00;
            coins++;
        } else if (sum >= 0.50) {
            sum -= 0.50;
            coins++;
        } else if (sum >= 0.20) {
            sum -= 0.20;
            coins++;
        } else if (sum >= 0.10) {
            sum -= 0.10;
            coins++;
        } else if (sum >= 0.05) {
            sum -= 0.05;
            coins++;
        } else if (sum >= 0.02) {
            sum -= 0.02;
            coins++;
        } else {
            sum -= 0.01;
            coins++;
        }
        sum = sum.toFixed(2);
    }
    console.log(`${coins}`);

}

solve(["1.51"]);