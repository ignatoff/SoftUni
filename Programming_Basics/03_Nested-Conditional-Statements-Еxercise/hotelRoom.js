function hotelRoom(month, nights) {

    nights = Number(nights);

    let studio;
    let apartment;

    if (month == "May" || month == "October") {
        studio = nights * 50;
        if (nights > 7 && nights <= 14) {
            studio *= 0.95;
        } else if (nights > 14) {
            studio *= 0.70;
        }
        apartment = nights * 65;
        if (nights > 14) {
            apartment *= 0.90;
        }
        console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
        console.log(`Studio: ${studio.toFixed(2)} lv.`);

    } else if (month == "June" || month == "September") {
        studio = nights * 75.20;
        if (nights > 14) {
            studio *= 0.80;
        }
        apartment = nights * 68.70;
        if (nights > 14) {
            apartment *= 0.90;
        }
        console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
        console.log(`Studio: ${studio.toFixed(2)} lv.`);

    } else if (month == "July" || month == "August") {
        studio = nights * 76;
        apartment = nights * 77;
        if (nights > 14) {
            apartment *= 0.90;
        }
        console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
        console.log(`Studio: ${studio.toFixed(2)} lv.`);

    }
}

hotelRoom("June", "14");
