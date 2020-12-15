function primePairs(input) {

    let in1 = Number(input[0]);
    let in2 = Number(input[1]);
    let last1 = Number(input[2]);
    let last2 = Number(input[3]);
    let out1 = in1 + last1;
    let out2 = in2 + last2;

    for (let i = in1; i <= out1; i++) {
        let maxI = i - 1;
        let isI = true;

        for (let divI = 2; divI <= maxI; divI++) {
            let result = i % divI;

            if (result == 0) {
                isI = false;
                break;
            }
        }

        if (isI) {

            for (let j = in2; j <= out2; j++) {
                let maxJ = j - 1;
                let isJ = true;

                for (let divJ = 2; divJ <= maxJ; divJ++) {
                    let result = j % divJ;

                    if (result == 0) {
                        isJ = false;
                        break;
                    }
                }
                if (isJ) console.log(`${i}${j}`);
            }
        }
    }
}

primePairs([
    "10",
    "20",
    "5",
    "5"
]);