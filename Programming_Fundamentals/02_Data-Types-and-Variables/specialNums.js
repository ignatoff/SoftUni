function specialNums(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let char = i.toString();

        for (let j = 0; j < char.length; j++) {
            sum += Number(char[j]);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);

        } else {
            console.log(`${i} -> False`);

        }
        sum = 0;
    }
}

specialNums(15);