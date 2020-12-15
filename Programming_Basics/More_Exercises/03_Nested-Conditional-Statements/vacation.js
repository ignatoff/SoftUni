function vacation(budget, season) {

    budget = Number(budget);

    if (budget <= 1000) {

        switch (season) {
            case "Summer": budget *= 0.65;
                console.log(`Alaska - Camp - ${budget.toFixed(2)}`); break;
            case "Winter": budget *= 0.45;
                console.log(`Morocco - Camp - ${budget.toFixed(2)}`); break;
        }
    } else if (budget > 3000) {
        budget *= 0.90;

        switch (season) {
            case "Summer":
                console.log(`Alaska - Hotel - ${budget.toFixed(2)}`); break;
            case "Winter":
                console.log(`Morocco - Hotel - ${budget.toFixed(2)}`); break;
        }

    } else {

        switch (season) {
            case "Summer": budget *= 0.80;
                console.log(`Alaska - Hut - ${budget.toFixed(2)}`); break;
            case "Winter": budget *= 0.60;
                console.log(`Morocco - Hut - ${budget.toFixed(2)}`); break;
        }
    }
}

vacation("799.50", "Winter");