function outfit(degrees, period) {

    degrees = Number(degrees);

    let clothes;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {

        switch (period) {
            case "Morning": clothes = "Sweatshirt";
                shoes = "Sneakers";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
            case "Afternoon": clothes = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
            case "Evening": clothes = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
        }
    } else if (degrees > 18 && degrees <= 24) {

        switch (period) {
            case "Morning": clothes = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
            case "Afternoon": clothes = "T-Shirt";
                shoes = "Sandals";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
            case "Evening": clothes = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
        }
    } else if (degrees >= 25) {

        switch (period) {
            case "Morning": clothes = "T-Shirt";
                shoes = "Sandals";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
            case "Afternoon": clothes = "Swim Suit";
                shoes = "Barefoot";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
            case "Evening": clothes = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`); break;
        }
    }
}

outfit("22", "Afternoon");
