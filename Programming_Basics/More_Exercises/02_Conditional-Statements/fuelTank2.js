function fuelTank2(type, amount, card) {
    amount = Number(amount);
    let gas = 0.93;
    let gasoline = 2.22;
    let diesel = 2.33;
    let sum;

    if (card === "Yes") {
        gas -= 0.08;
        gasoline -= 0.18;
        diesel -= 0.12;
    }

    if (type === "Gas") {
        sum = amount * gas;
    } else if (type === "Gasoline") {
        sum = amount * gasoline;
    } else if (type === "Diesel") {
        sum = amount * diesel;
    }

    if (amount <= 25 && amount >= 20) {
        sum -= sum * 0.08;
    } else if (amount > 25) {
        sum -= sum * 0.10;
    }

    console.log(`${sum.toFixed(2)} lv.`);
}

fuelTank2("Gas", "30", "Yes");