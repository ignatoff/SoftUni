function football(input) {

    let team = input[0];
    let games = Number(input[1]);
    let countW = 0;
    let countD = 0;
    let countL = 0;
    let isZero = false;

    for (let i = 2; i < input.length; i++) {
        let result = input[i];

        if (games == 0) {
            isZero = true;
            break;
        }

        if (result == "W") countW++;
        else if (result == "D") countD++;
        else if (result == "L") countL++;
    }
    let winPoints = countW * 3;
    let points = winPoints + countD;
    let rate = (countW / games) * 100;

    if (isZero) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        console.log(`${team} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${countW}`);
        console.log(`## D: ${countD}`);
        console.log(`## L: ${countL}`);
        console.log(`Win rate: ${rate.toFixed(2)}%`);
    }
}

football([
    "Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"
]);