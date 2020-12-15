function energy(fruit, type, amount) {

    amount = Number(amount);
    let price = 0;

    switch (fruit) {
        case "Watermelon":
            switch (type) {
                case "small": price = 2 * 56.00 * amount;
                    break;
                case "big": price = 5 * 28.70 * amount;
                    break;
            } break;
        case "Mango":
            switch (type) {
                case "small": price = 2 * 36.66 * amount;
                    break;
                case "big": price = 5 * 19.60 * amount;
                    break;
            } break;
        case "Pineapple":
            switch (type) {
                case "small": price = 2 * 42.10 * amount;
                    break;
                case "big": price = 5 * 24.80 * amount;
                    break;
            } break;
        case "Raspberry":
            switch (type) {
                case "small": price = 2 * 20.00 * amount;
                    break;
                case "big": price = 5 * 15.20 * amount;
                    break;
            } break;
    }

    if (price >= 400 && price <= 1000) price *= 0.85;
    else if (price > 1000) price *= 0.50;
    
    console.log(`${price.toFixed(2)} lv.`);
}

energy(
    "Mango",
    "big",
    "8",
);