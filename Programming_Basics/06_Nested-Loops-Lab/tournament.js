function solve(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;
    let sport = input[index];

    let counterDays = 0;
    let money = 0;
    let totalMoney = 0;
    let wins = 0;
    let defeats = 0;
    let dayWin = 0;
    let dayLose = 0;

    while (index < input.length) {

        while (sport !== "Finish") {
            index++;
            let result = input[index];

            if (result === "win") {
                money += 20;
                wins++;
            } else {
                defeats++;
            }
            index++;
            sport = input[index];

        }

        if (wins > defeats) {
            money *= 1.10;
            dayWin++;
        } else {
            dayLose++;
        }
        totalMoney += money;
        money = 0;
        wins = 0;
        defeats = 0;
        counterDays++;
        index++;
        sport = input[index];
    }

    if (dayWin > dayLose){
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
        
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);

    }

}

solve([
    '3',
    'darts',
    'lose',
    'handball',
    'lose',
    'judo',
    'win',
    'Finish',
    'snooker',
    'lose',
    'swimming',
    'lose',
    'squash',
    'lose',
    'table tennis',
    'win',
    'Finish',
    'volleyball',
    'win',
    'basketball',
    'win',
    'Finish'
])