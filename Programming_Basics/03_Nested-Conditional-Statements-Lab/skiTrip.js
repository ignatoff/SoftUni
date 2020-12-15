function skiTrip(days, type, reply) {

    days = Number(days);
    let nights = days - 1;
    let sum;
    let result;
    let final;

    if (type === "room for one person") {
        sum = nights * 18;
        if (reply === "positive") {
            final = sum * 1.25;
            console.log(final.toFixed(2));

        } else {
            final = sum * 0.9;
            console.log(final.toFixed(2));

        }
    }
    if (type === "apartment") {
        sum = nights * 25;
        if (days < 10) {
            result = sum * 0.70;
            if (reply === "positive") {
                final = result * 1.25;
                console.log(final.toFixed(2));

            } else {
                final = result * 0.9;
                console.log(final.toFixed(2));
            }
        } else if (days <= 15) {
            result = sum * 0.65;
            if (reply === "positive") {
                final = result * 1.25;
                console.log(final.toFixed(2));

            } else {
                final = result * 0.9;
                console.log(final.toFixed(2));
            }
        } else {
            result = sum * 0.50;
            if (reply === "positive") {
                final = result * 1.25;
                console.log(final.toFixed(2));

            } else {
                final = result * 0.9;
                console.log(final.toFixed(2));
            }
        }
    }
    if (type === "president apartment") {
        sum = nights * 35;
        if (days < 10) {
            result = sum * 0.90;
            if (reply === "positive") {
                final = result * 1.25;
                console.log(final.toFixed(2));

            } else {
                final = result * 0.9;
                console.log(final.toFixed(2));
            }
        } else if (days <= 15) {
            result = sum * 0.85;
            if (reply === "positive") {
                final = result * 1.25;
                console.log(final.toFixed(2));

            } else {
                final = result * 0.9;
                console.log(final.toFixed(2));
            }
        } else {
            result = sum * 0.80;
            if (reply === "positive") {
                final = result * 1.25;
                console.log(final.toFixed(2));

            } else {
                final = result * 0.9;
                console.log(final.toFixed(2));
            }
        }
    }

}

skiTrip("2", "apartment", "positive");