function home(type, numFlowers, budget) {

    numFlowers = Number(numFlowers);
    budget = Number(budget);

    let cost;

    switch (type) {
        case "Roses": cost = numFlowers * 5;
            if (numFlowers > 80) {
                cost *= 0.90;
            } break;
        case "Dahlias": cost = numFlowers * 3.80;
            if (numFlowers > 90) {
                cost *= 0.85;
            } break;
        case "Tulips": cost = numFlowers * 2.80;
            if (numFlowers > 80) {
                cost *= 0.85;
            } break;
        case "Narcissus": cost = numFlowers * 3;
            if (numFlowers < 120) {
                cost *= 1.15;
            } break;
        case "Gladiolus": cost = numFlowers * 2.50;
            if (numFlowers < 80) {
                cost *= 1.20;
            } break;
    }

    let total = Math.abs(budget - cost);

    if (budget >= cost) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${type} and ${total.toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money, you need ${total.toFixed(2)} leva more.`);

    }
}

home("Tulips", "88", "260");
