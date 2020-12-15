function pinCodes(input) {

    let num1 = Number(input[0]);
    let result = 0;

    for (let i = 1; i <= num1; i++) {

        if (i % 2 == 0) {
            let num2 = Number(input[1]);

            for (let k = 2; k <= num2; k++) {
                let lastDiv = k - 1;
                let isPrime = true;

                for (let div = 2; div <= lastDiv; div++) {
                    result = k % div;

                    if (result == 0) {
                        isPrime = false;
                        break;
                    }
                }

                if (isPrime) {
                    let num3 = Number(input[2]);

                    for (let o = 1; o <= num3; o++) {

                        if (o % 2 == 0) {
                            console.log(`${i} ${k} ${o}`);
                        }
                    }
                }
            }
        }
    }
}

pinCodes([
    "8",
    "2",
    "8"
]);