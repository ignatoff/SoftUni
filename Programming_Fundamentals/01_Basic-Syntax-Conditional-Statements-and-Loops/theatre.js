function theatre(day, age) {

    let price = 0;
    let isError = true;

    if (age >= 0 && age <= 18) {

        switch (day) {
            case 'Weekday': price = 12;
                break;
            case 'Weekend': price = 15;
                break;
            case 'Holiday': price = 5;
                break;
        }
    } else if (age > 18 && age <= 64) {

        switch (day) {
            case 'Weekday': price = 18;
                break;
            case 'Weekend': price = 20;
                break;
            case 'Holiday': price = 12;
                break;
        }
    } else if (age > 64 && age <= 122) {

        switch (day) {
            case 'Weekday': price = 12;
                break;
            case 'Weekend': price = 15;
                break;
            case 'Holiday': price = 10;
                break;
        }
    } else {
        isError = false;
        console.log(`Error!`);

    }
    
    if (isError){
    console.log(`${price}$`);

    }
}

theatre('Weekday', 42);