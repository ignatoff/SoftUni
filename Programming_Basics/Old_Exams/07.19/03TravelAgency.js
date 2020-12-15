function travelAgency(city, package, discount, days) {

    days = Number(days);
    let price = 0;
    let isInvalid = false;
    let isCity = false;

    if (city == "Bansko" || city == "Borovets") {

        switch (package) {
            case "withEquipment": price = 100;
                break;
            case "noEquipment": price = 80;
                break;
            default: isInvalid = true;
        }
    } else if (city == "Varna" || city == "Burgas") {

        switch (package) {
            case "withBreakfast": price = 130;
                break;
            case "noBreakfast": price = 100;
                break;
            default: isInvalid = true;
        }
    } else {
        isCity = true;
        console.log(`Invalid input!`);
    }

    if (isInvalid) console.log(`Invalid input!`);

    if (discount == "yes") {

        switch (package) {
            case "withEquipment": price -= (price * 10) / 100;
                break;
            case "noEquipment": price -= (price * 5) / 100;
                break;
            case "withBreakfast": price -= (price * 12) / 100;
                break;
            case "noBreakfast": price -= (price * 7) / 100;
                break;
        }
    }

    if (days > 7) days -= 1;
    else if (days < 1) console.log(`Days must be positive number!`);

    let total = price * days;

    if (!isCity && !isInvalid && days > 0) {
        console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
    }
}

travelAgency(
    "Borovets",
    "noEquipment",
    "yes",
    "6"
);