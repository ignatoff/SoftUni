function dailyWage(input) {

    let rows = Number(input[0]);
    let positions = Number(input[1]);
    let sumSt = 0;
    let sumBl = 0;
    let counterBl = 0;

    for (let i = 1; i <= rows; i++) {
        let bowSt = 3.50;
        let bowBl = 5;

        if (i % 2 !== 0) {
            bowSt *= positions;
            sumSt += bowSt;
        } else {

            for (let k = 1; k <= positions; k++) {

                if (k % 3 !== 0) {
                    counterBl++;
                }
            }
            bowBl *= counterBl;
            sumBl += bowBl;
            counterBl = 0;
        }
    }
    let total = (sumBl + sumSt) * 0.80;

    console.log(`Total: ${total.toFixed(2)} lv.`);
}

dailyWage([
    '2',
    '8'
]
);