function powerfulWord(input) {

    let index = 0;
    let word = input[index];
    let sum = 0;
    let result = 0;
    let power = 0;
    let winner = ''
    let str = "^[aieouyAIEOUY].*";
    let vowel = word.match(str);

    while (word != "End of words") {

        for (let i = 0; i < word.length; i++) {
            let char = word.charCodeAt(i);
            sum += char;

            if (i == 0) vowel = word.match(str);
        }

        if (vowel) result = sum * word.length;
        else result = Math.floor(sum / word.length);

        if (result > power) {
            power = result;
            winner = word;
        }
        sum = 0;
        result = 0;
        index++;
        word = input[index];
    }
    console.log(`The most powerful word is ${winner} - ${power}`);
}

powerfulWord([
    "Is",
    "Experience",
    "End of words"
]);