function smallShop(product, city, amount) {

    amount = Number(amount);
    let sum;

    if (city === "Sofia") {
        switch (product) {
            case "coffee": sum = amount * 0.50; break;
            case "water": sum = amount * 0.80; break;
            case "beer": sum = amount * 1.20; break;
            case "sweets": sum = amount * 1.45; break;
            case "peanuts": sum = amount * 1.60; break;
        }
    }

    if (city === "Plovdiv") {
        switch (product) {
            case "coffee": sum = amount * 0.40; break;
            case "water": sum = amount * 0.70; break;
            case "beer": sum = amount * 1.15; break;
            case "sweets": sum = amount * 1.30; break;
            case "peanuts": sum = amount * 1.50; break;
        }
    }

    if (city === "Varna") {
        switch (product) {
            case "coffee": sum = amount * 0.45; break;
            case "water": sum = amount * 0.70; break;
            case "beer": sum = amount * 1.10; break;
            case "sweets": sum = amount * 1.35; break;
            case "peanuts": sum = amount * 1.55; break;
        }
    }

    console.log(sum);

}

smallShop("coffee", "Varna", "2");