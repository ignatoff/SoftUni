function doorLock(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    for (let i = 1; i <= a; i++) {

        if (i % 2 == 0) {

            for (let j = 2; j <= b; j++) {
                let maxDiv = j - 1;
                let isPrime = true;

                for (let div = 2; div <= maxDiv; div++) {
                    let result = j % div;

                    if (result == 0){
                        isPrime = false;
                        break;
                    }                    
                }

                if (isPrime) {

                    for (let k = 1; k <= c; k++) {

                        if (k % 2 == 0) {
                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                }
            }
        }
    }    
}

doorLock([
    "3",
    "5",
    "5"
]);