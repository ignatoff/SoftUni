function boat(budget, season, fishmen) {

    budget = Number(budget);
    fishmen = Number(fishmen);

    let cost;

    switch (season) {
        case "Spring": cost = 3000; break;
        case "Summer":
        case "Autumn": cost = 4200; break;
        case "Winter": cost = 2600; break;
    }

    if (fishmen <= 6) {
        cost *= 0.90;
    } else if (fishmen >= 12) {
        cost *= 0.75;
    } else {
        cost *= 0.85;
    }

    if (season != "Autumn" && fishmen % 2 == 0) {
        cost *= 0.95;
    }

    let final = Math.abs(budget - cost);

    if (budget >= cost) {
        console.log(`Yes! You have ${final.toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money! You need ${final.toFixed(2)} leva.`);

    }
}

boat("3600", "Autumn", "6");
