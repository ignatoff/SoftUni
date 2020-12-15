function letters(input) {

    let index = 0;
    let letter = input[index];
    let word = "";
    let result = "";
    let counterC = 0;
    let counterN = 0;
    let counterO = 0;

    while (letter !== "End") {

        if (/[a-zA-Z]/.test(letter)) {

            switch (letter) {
                case "c":
                    if (counterC > 0) word += letter;

                    counterC++;
                    break;
                case "n":
                    if (counterN > 0) word += letter;

                    counterN++;
                    break;
                case "o":
                    if (counterO > 0) word += letter;

                    counterO++;
                    break;
                default: word += letter;
            }

            if (counterC > 0 && counterN > 0 && counterO > 0) {
                result += `${word} `;
                word = "";
                counterC = 0;
                counterN = 0;
                counterO = 0;
            }
        }

        index++;
        letter = input[index];
    }
    console.log(result);
}

letters([
    "H",
    "n",
    "e",
    "l",
    "l",
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"
]);