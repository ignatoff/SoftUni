function camp(season, group, students, nights) {

    students = Number(students);
    nights = Number(nights);

    let cost;
    let sport;
    let total;

    switch (season){
        case "Winter":

            switch (group){
                case "boys": cost = students * nights * 9.60;
                sport = "Judo"; break;
                case "girls": cost = students * nights * 9.60;
                sport = "Gymnastics"; break;
                case "mixed": cost = students * nights * 10;
                sport = "Ski"; break;                
            } break;
        case "Spring":

            switch (group){
                case "boys": cost = students * nights * 7.20;
                sport = "Tennis"; break;
                case "girls": cost = students * nights * 7.20;
                sport = "Athletics"; break;
                case "mixed": cost = students * nights * 9.50;
                sport = "Cycling"; break;                
            } break;
        case "Summer":

            switch (group){
                case "boys": cost = students * nights * 15;
                sport = "Football"; break;
                case "girls": cost = students * nights * 15;
                sport = "Volleyball"; break;
                case "mixed": cost = students * nights * 20;
                sport = "Swimming"; break;                
            } break;
    }

    if (students >= 50){
        total = cost * 0.50;
    } else if (students >= 20 && students < 50){
        total = cost * 0.85;
    } else if (students >= 10 && students < 20){
        total = cost * 0.95;
    } else {
        total = cost;
    }
    console.log(`${sport} ${total.toFixed(2)} lv.`);    
}

camp("Winter", "mixed", "19", "15");