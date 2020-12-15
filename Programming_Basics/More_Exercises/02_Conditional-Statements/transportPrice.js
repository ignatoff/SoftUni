function transportPrice(km, period) {

    km = Number(km);
    let price;

    if (km >= 100) {
        price = km * 0.06;
        console.log(`${price.toFixed(2)}`);
    } else if (km >= 20) {
        price = km * 0.09;
        console.log(`${price.toFixed(2)}`);
    } else {

        if (period === "day") {
            price = (km * 0.79) + 0.7;
            console.log(`${price.toFixed(2)}`);
        } else if (period === "night") {
            price = (km * 0.9) + 0.7;
            console.log(`${price.toFixed(2)}`);
        }
    }
}

transportPrice("180", "night");