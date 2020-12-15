function nameGame(input) {

    let index = 0;
    let name = input[index];
    index++;
    let num = input[index];
    let countNum = 0;
    let points = 0;
    let winPoints = 0;
    let winner = "";

    while (name != "Stop") {

        for (let i = 0; i < name.length; i++) {
            let element = name[i];
            let asc = String.fromCharCode(num);
            countNum++;

            if (element == asc) points += 10;
            else points += 2;
            
            index++;
            num = input[index];
        }

        if (points >= winPoints) {
            winPoints = points;
            winner = name;
            points = 0;
        } else {
            points = 0;
        }

        if (countNum == name.length) {
            name = input[index];
            countNum = 0;
            index++;
            num = input[index];
        }
    }
    console.log(`The winner is ${winner} with ${winPoints} points!`);
}

nameGame([
    "Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"
]);