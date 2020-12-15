function substitute(input) {

    let num1 = Number(input[0]);
    let firstString = "";
    let secondString = "";
    let changes = 0;

    for (let i = num1; i <= 8; i++) {
        let num2 = Number(input[1]);

        for (let j = 9; j >= num2; j--) {

            if (i % 2 === 0 && j % 2 !== 0) {
                firstString = `${i}${j}`;
                let num3 = Number(input[2]);

                for (let k = num3; k <= 8; k++) {
                    let num4 = Number(input[3]);

                    for (let l = 9; l >= num4; l--) {

                        if (k % 2 === 0 && l % 2 !== 0) {
                            secondString = `${k}${l}`;

                            if (firstString === secondString) {
                                console.log(`Cannot change the same player.`);
                            } else {
                                console.log(`${firstString} - ${secondString}`);
                                changes++;
                            }

                            if (changes === 6) break;
                        }
                    }
                    if (changes === 6) break;
                }
            }
            if (changes === 6) break;
        }
        if (changes === 6) break;
    }
}

substitute([
    "6",
    "7",
    "5",
    "6"
]);