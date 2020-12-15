function club(input) {

    let needed = Number(input[0]);
    let index = 1;
    let cocktail = input[index];
    let total = 0;
    let isReached = false;

    while (cocktail != "Party!") {
        let sum = 0;
        let amount = Number(input[index + 1]);
        let price = cocktail.length;
        sum = price * amount;

        if (sum % 2 != 0) sum -= (sum * 25) / 100;
        
        total += sum;

        if (total >= needed) {
            isReached = true;
            console.log(`Target acquired.`);
            break;
        }
        index += 2;
        cocktail = input[index];
    }

    if (isReached) {
        console.log(`Club income - ${total.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${(needed - total).toFixed(2)} leva more.`);
        console.log(`Club income - ${total.toFixed(2)} leva.`);
    }
}

club([
    "500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"
]);