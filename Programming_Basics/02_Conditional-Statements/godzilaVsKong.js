function godzilaVsKong(budget, extras, price) {

    budget = Number(budget);
    extras = Number(extras);
    price = Number(price);

    let decor = budget * 0.1;
    let clothing = extras * price;

    if (extras > 150) {
        clothing *= 0.9;
    }

    let sum = decor + clothing;

    if (sum <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${Math.abs(budget - sum).toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(budget - sum).toFixed(2)} leva more.`);

    }

}

godzilaVsKong("20000", "120", "55.5");
