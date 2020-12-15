function equalPairs(input) {

    let couples = Number(input[0]);
    let equal = 0;
    let maxDiff = 0;

    for (let i = 1; i < input.length; i += 2) {
        let first = Number(input[i]);
        let second = Number(input[i + 1]);
        let sum1 = first + second;
        let sum2 = NaN;

        if (input.length < 3) {
            equal = sum1;
            break;
        }

        if (sum1 != sum2) {
            let third = Number(input[i + 2]);
            let fourth = Number(input[i + 3]);
            sum2 = Number(third + fourth);
            let result = 0;

            if (sum1 > sum2) result = sum1 - sum2;
            else if (sum1 < sum2) result = sum2 - sum1;
            else equal = sum1;

            if (result > maxDiff) maxDiff = result;
        }
    }

    if (maxDiff == 0) console.log(`Yes, value=${equal}`);
    else console.log(`No, maxdiff=${maxDiff}`);
}

equalPairs([
    "4",
    "1",
    "1",
    "3",
    "1",
    "2",
    "2",
    "1",
    "0"
]);