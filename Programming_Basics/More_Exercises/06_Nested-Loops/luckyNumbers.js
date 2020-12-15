function luckyNumbers(input) {

    let num = input[0];
    let rec = '';

    for (let i = 1001; i <= 9999; i++) {
        let script = `${i}`
        let a = Number(script[0]);
        let b = Number(script[1]);
        let c = Number(script[2]);
        let d = Number(script[3]);

        if (b != 0 && c != 0 && d != 0) {

            if ((a + b) == (c + d) && num % (a + b) == 0) rec += `${script} `;
        }
    }
    console.log(rec);
}

luckyNumbers([
    "7"
]);