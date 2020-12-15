function familyTrip(budget, nights, price, percent) {

    budget = Number(budget);
    nights = Number(nights);
    price = Number(price);
    percent = Number(percent);

    let sumNights = 0;
    let additions = (budget * percent) / 100;

    if (nights > 7) price -= (price * 5) / 100;

    sumNights = price * nights;
    let result = additions + sumNights;
    let total = Math.abs(budget - result);

    if (budget >= result) console.log(`Ivanovi will be left with ${total.toFixed(2)} leva after vacation.`);
    else console.log(`${total.toFixed(2)} leva needed.`);
}

familyTrip(
    "800.50",
    "8",
    "100",
    "2"
);