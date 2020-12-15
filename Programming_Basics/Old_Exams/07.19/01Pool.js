function pool(people, entranceFee, sunbedFee, umbrellaFee) {

    people = Number(people);
    entranceFee = Number(entranceFee);
    sunbedFee = Number(sunbedFee);
    umbrellaFee = Number(umbrellaFee);

    let sumEntrance = people * entranceFee;
    let numUmbrella = Math.ceil(people / 2);
    let numSunbed = Math.ceil(people * 0.75);
    let sumU = numUmbrella * umbrellaFee;
    let sumS = numSunbed * sunbedFee;

    let total = sumEntrance + sumU + sumS;

    console.log(`${total.toFixed(2)} lv.`);
}

pool(
    "21",
    "5.50",
    "4.40",
    "6.20"
);