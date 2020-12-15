function maxNumber(input) {

    let index = 0;
    let data = input[index];
    index++;
    let k = Number.MIN_SAFE_INTEGER;

    while (data !== "Stop") {
        let num = Number(data);

        if (num > k) {
            k = num;
        }
        data = input[index];
        index++;
    }
    console.log(k);

}

maxNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"]);
