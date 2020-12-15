function coffeeMachine(type, sugar, amount) {

    let price = 0;
    amount = Number(amount);

    if (type == "Espresso") {

        switch (sugar) {
            case "Without": price = 0.90;
                break;
            case "Normal": price = 1.00;
                break;
            case "Extra": price = 1.20;
                break;
        }
    } else if (type == "Cappuccino") {

        switch (sugar) {
            case "Without": price = 1.00;
                break;
            case "Normal": price = 1.20;
                break;
            case "Extra": price = 1.60;
                break;
        }
    } else if (type == "Tea") {

        switch (sugar) {
            case "Without": price = 0.50;
                break;
            case "Normal": price = 0.60;
                break;
            case "Extra": price = 0.70;
                break;
        }
    }
    let sum = amount * price;

    if (sugar == "Without") sum -= (sum * 35) / 100;

    if (type == "Espresso" && amount > 5) sum -= (sum * 25) / 100;

    if (sum > 15) sum -= (sum * 20) / 100;

    console.log(`You bought ${amount} cups of ${type} for ${sum.toFixed(2)} lv.`);
}

coffeeMachine(
    "Espresso",
    "Without",
    "10"
);