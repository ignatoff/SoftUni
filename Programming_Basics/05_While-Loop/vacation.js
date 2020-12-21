function solve(input) {

    let index = 0;
    let target = Number(input[index]);
    index++;
    let savedMoney = Number(input[index]);
    index++;
    let action = input[index];
    let days = 0;
    let spendDays = 0;

    while (savedMoney < target) {
        let money = Number(input[index + 1]);
        days++;

        if (action === "spend") {
            spendDays++;
            savedMoney -= money;

            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(`${days}`);
                break;
            }

            if (savedMoney < 0) {
                savedMoney = 0;
            }

        } else {
            savedMoney += money;
            spendDays = 0;
        }

        index += 2;
        action = input[index];
    }
    if (spendDays < 5) {
        console.log(`You saved the money for ${days} days.`);

    }
}

solve([
    "110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]);
