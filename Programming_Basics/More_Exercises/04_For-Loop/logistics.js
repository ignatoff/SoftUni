function logistics(input) {

    let num = Number(input[0]);
    let busCargo = 0;
    let truckCargo = 0;
    let trainCargo = 0;
    let cargo = 0;
    let priceBus = 200;
    let priceTruck = 175;
    let priceTrain = 120;
    let total = 0;

    for (let i = 1; i <= num; i++) {
        let tons = Number(input[i]);
        cargo += tons;

        if (tons < 4) busCargo += tons;
        else if (tons < 12) truckCargo += tons;
        else trainCargo += tons;
    }

    priceBus *= busCargo;
    priceTruck *= truckCargo;
    priceTrain *= trainCargo;

    total = (priceTrain + priceTruck + priceBus) / cargo;

    console.log(total.toFixed(2));
    console.log(`${((busCargo / cargo) * 100).toFixed(2)}%`);
    console.log(`${((truckCargo / cargo) * 100).toFixed(2)}%`);
    console.log(`${((trainCargo / cargo) * 100).toFixed(2)}%`);
}

logistics([
    "4",
    "1",
    "5",
    "16",
    "3"
]);