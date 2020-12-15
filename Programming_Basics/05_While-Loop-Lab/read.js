function solve(input) {

    let index = 0;
    let words = input[index];
    index++;

    while (words !== "Stop") {
        console.log(words);
        words = input[index];
        index++;

    }
}

solve(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"]);
