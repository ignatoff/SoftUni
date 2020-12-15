function race(liters, consumption, laps) {

    liters = Number(liters);
    consumption = Number(consumption);
    laps = Number(laps);

    let left = 0;

    for (let i = 1; i <= laps; i++) {

        if (i === 1) {
            liters -= consumption;
        } else {
            consumption += 0.1;
            liters -= consumption;
        }

        if (liters <= 0) {
            console.log(`You are out of fuel in round ${i}!`);
            break;
        }
    }
    if (liters > 0) {
        console.log(`Congrats! You won the race!`);

    }
}

race("50", "4.3", "30");