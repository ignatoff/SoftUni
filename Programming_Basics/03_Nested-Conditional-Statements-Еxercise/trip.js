function trip(budget, season) {

    budget = Number(budget);

    let cost;
    let destination;
    let type;

    if (budget <= 100) {
        destination = "Bulgaria";

        switch (season) {
            case "summer": cost = budget * 0.30; type = "Camp"; break;
            case "winter": cost = budget * 0.70; type = "Hotel"; break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        cost = budget * 0.90;
        type = "Hotel";

    } else {
        destination = "Balkans";

        switch (season) {
            case "summer": cost = budget * 0.40; type = "Camp"; break;
            case "winter": cost = budget * 0.80; type = "Hotel"; break;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${cost.toFixed(2)}`);

}

trip("312", "summer");