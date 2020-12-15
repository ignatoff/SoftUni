function pets(days, foodKg, dogF, catF, turtleF) {

    days = Number(days);
    foodKg = Number(foodKg);
    dogF = Number(dogF);
    catF = Number(catF);
    turtleF = Number(turtleF) / 1000;

    let allFood = days * (dogF + catF + turtleF);
    let final = Math.abs(allFood - foodKg);

    if (allFood <= foodKg) {
        console.log(`${Math.floor(final)} kilos of food left.`);

    } else {
        console.log(`${Math.ceil(final)} more kilos of food are needed.`);

    }

}

pets("2", "5", "1", "1", "1200");