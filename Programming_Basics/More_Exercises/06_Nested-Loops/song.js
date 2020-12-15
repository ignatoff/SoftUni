function song(input) {

    let num = Number(input[0]);
    let counter = 0;
    let rec = '';
    let sum = 0;
    let pass = 0;
    let isEqual = false;

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d) {
                        sum = (a * b) + (c * d);

                        if (sum == num) {
                            counter++;
                            rec += `${a}${b}${c}${d} `;

                            if (counter == 4) {
                                isEqual = true;
                                pass = `${a}${b}${c}${d}`;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(rec);

    if (isEqual) console.log(`Password: ${pass}`);
    else console.log(`No!`);
}

song([
    "11"
]);