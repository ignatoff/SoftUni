function solve(input) {

    let n = Number(input[0]);
    let rec = "";
    let num = 0;

    for (let row = 1; row <= n; row++) {

        for (let col = 1; col <= row; col++) {
            if (num >= n) {
                break;
            }
            num++;
            rec += num + " ";
        }
        console.log(rec);
        rec = "";
    }

}

solve([15]);