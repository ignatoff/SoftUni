function solve(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let counter = 0;
    let sum = 0;

    for (let i = start; i <= end; i++) {

        for (let u = start; u <= end; u++) {
            sum = i + u;
            counter++;

            if (sum === magic) {
                console.log(`Combination N:${counter} (${i} + ${u} = ${magic})`);
                break;

            }
        }
        if (sum === magic) {
            break;
        }
    }
    if (sum !== magic) {
        console.log(`${counter} combinations - neither equals ${magic}`);

    }


}

solve(["88",
    "888",
    "1000"])
    ;
