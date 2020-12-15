function car(budget, season) {
    
    budget = Number(budget);

    if (budget <= 100){
        switch (season){
            case "Summer": budget *= 0.35;
                console.log(`Economy class`);
                console.log(`Cabrio - ${budget.toFixed(2)}`); break;
            case "Winter": budget *= 0.65;
                console.log(`Economy class`);
                console.log(`Jeep - ${budget.toFixed(2)}`); break;                
        }
    } else if (budget > 500){
        budget *= 0.90;
        console.log(`Luxury class`);
        console.log(`Jeep - ${budget.toFixed(2)}`);         

    } else {
        switch (season){
            case "Summer": budget *= 0.45;
                console.log(`Compact class`);
                console.log(`Cabrio - ${budget.toFixed(2)}`); break;
            case "Winter": budget *= 0.80;
                console.log(`Compact class`);
                console.log(`Jeep - ${budget.toFixed(2)}`); break;                
        }
    }   
}

car("1010", "Winter");