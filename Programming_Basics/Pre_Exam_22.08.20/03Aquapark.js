function aquapark(month, hours, people, time) {

    hours = Number(hours);
    people = Number(people);

    let price = 0;
    let total = 0;

    if (month === "march" || month === "april" || month === "may") {

        switch (time) {
            case "day": price = 10.50;
                if (people >= 4) {
                    price *= 0.90;
                }
                if (hours >= 5) {
                    price *= 0.50;
                }
                total = price * people * hours;
                break;
            case "night": price = 8.40;
                if (people >= 4) {
                    price *= 0.90;
                }
                if (hours >= 5) {
                    price *= 0.50;
                }
                total = price * people * hours;
                break;
        }
    } else if (month === "june" || month === "july" || month === "august") {

        switch (time) {
            case "day": price = 12.60;
                if (people >= 4) {
                    price *= 0.90;
                }
                if (hours >= 5) {
                    price *= 0.50;
                }
                total = price * people * hours;
                break;
            case "night": price = 10.20;
                if (people >= 4) {
                    price *= 0.90;
                }
                if (hours >= 5) {
                    price *= 0.50;
                }
                total = price * people * hours;
                break;
        }
    }
    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
    console.log(`Total cost of the visit: ${total.toFixed(2)}`);    
}

aquapark(
    "march",
    "3",
    "3",
    "day"
);