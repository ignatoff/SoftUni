function dishwasher(input) {

    let detergent = Number(input[0]) * 750;
    let index = 1;
    let utensils = input[index];

    let sets = 0;
    let dishes = 0;
    let pots = 0;
    let detDish = 5;
    let detPot = 15;
    let left = detergent;
    let isFinished = false;

    while (utensils !== "End") {
        utensils = Number(input[index]);
        sets++;

        if (sets % 3 == 0) {
            pots += utensils;
            left -= (detPot * utensils);
        } else {
            dishes += utensils;
            left -= (detDish * utensils);
        }

        if (left < 0) {
            isFinished = true;
            left = Math.abs(left);
            break;
        }
        index++;
        utensils = input[index];
    }

    if (isFinished) {
        console.log(`Not enough detergent, ${left} ml. more necessary!`);
    } else {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${left} ml.`);   
    }
}

dishwasher([
    "1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30"
]);