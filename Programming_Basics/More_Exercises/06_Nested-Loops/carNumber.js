function carNumber(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let rec = '';

    for (let i = num1; i <= num2; i++) {

        for (let j = num1; j <= num2; j++) {

            for (let k = num1; k <= num2; k++) {

                for (let l = num1; l <= num2; l++) {

                    if (i > l) {

                        if (i % 2 == 0 && l % 2 != 0 && (j + k) % 2 == 0) {
                            rec += `${i}${j}${k}${l} `
                        } else if (i % 2 != 0 && l % 2 == 0 && (j + k) % 2 == 0) {
                            rec += `${i}${j}${k}${l} `
                        }
                    }
                }
            }
        }
    }
    console.log(rec);
}

carNumber([
    "2",
    "3"
]);