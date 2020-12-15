function truckDriver(season, km) {

    km = Number(km);

    let payment;
    let final;

    if (km <= 5000) {

        switch (season) {
            case "Spring":
            case "Autumn": payment = 4 * 0.75 * km; break;
            case "Summer": payment = 4 * 0.90 * km; break;
            case "Winter": payment = 4 * 1.05 * km; break;
        }
        final = payment * 0.90;
        console.log(final.toFixed(2));
    } else if (km > 10000) {
        payment = 4 * 1.45 * km;
        final = payment * 0.90;
        console.log(final.toFixed(2));
    } else {

        switch (season) {
            case "Spring":
            case "Autumn": payment = 4 * 0.95 * km; break;
            case "Summer": payment = 4 * 1.10 * km; break;
            case "Winter": payment = 4 * 1.25 * km; break;
        }
        final = payment * 0.90;
        console.log(final.toFixed(2));
    }
}

truckDriver("Summer", "3455");