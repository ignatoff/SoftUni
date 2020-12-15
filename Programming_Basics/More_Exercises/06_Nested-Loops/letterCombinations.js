function letterCombinations(input) {

    let str = "abcdefghijklmnopqrstuvwxyz";
    let alphabet = str.split('');

    let a = input[0];
    let b = input[1];
    let c = input[2];
    let counter = 0;
    let rec = '';

    for (let i = 0; i < alphabet.length; i++) {
        let letterA = alphabet[i];

        if (letterA == a) {
            let numA = Number(i);

            for (let o = numA; o < alphabet.length; o++) {
                let letterC = alphabet[o];

                if (letterC == c) break;
            }

            for (let k = numA; k < alphabet.length; k++) {
                let letterB = alphabet[k];

                if (letterB == b) {
                    let numB = Number(k);

                    for (let n = numA; n <= numB; n++) {
                        let comboN = alphabet[n];

                        for (let m = numA; m <= numB; m++) {
                            let comboM = alphabet[m];

                            for (let l = numA; l <= numB; l++) {
                                let comboL = alphabet[l];

                                if (comboN != c && comboM != c && comboL != c) {
                                    rec += `${comboN}${comboM}${comboL} `;
                                    counter++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(`${rec}${counter}`);
}

letterCombinations([
    "f",
    "k",
    "h"
]);