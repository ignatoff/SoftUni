function kartCenter(sum, laps, fanCard, type) {

    sum = Number(sum);

    let price = 0;

    switch (laps) {
        case "five":

            switch (type) {
                case "Child": price = 7;
                    break;
                case "Junior": price = 9;
                    break;
                case "Adult": price = 12;
                    break;
                case "Profi": price = 18;
                    break;
            } break;
        case "ten":

            switch (type) {
                case "Child": price = 11;
                    break;
                case "Junior": price = 16;
                    break;
                case "Adult": price = 21;
                    break;
                case "Profi": price = 32;
                    break;
            } break;
    }

    if (fanCard === "yes") {
        price *= 0.80;
    }
    let left = Math.abs(sum - price);

    if (sum >= price) {
        console.log(`You bought ${type} ticket for ${laps} laps. Your change is ${left.toFixed(2)}lv.`);
    } else {
        console.log(`You don't have enough money! You need ${left.toFixed(2)}lv more.`);
    }
}

kartCenter(
    "16",
    "five",
    "no",
    "Adult"
);