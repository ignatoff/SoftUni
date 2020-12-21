function gladiator(lost, helmet, sword, shield, armour) {

    let expences = 0;
    let counter = 0;

    for (let i = 1; i <= lost; i++) {
        
        if (i % 2 == 0){
            expences += helmet;
        }

        if (i % 3 == 0){
            expences += sword;
        }

        if (i % 2 == 0 && i % 3 == 0){
            expences += shield;
            counter++;
        }

        if (counter == 2){
            expences += armour;
            counter = 0;
        }
    }
    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
    
}

gladiator(
    23,
    12.50,
    21.50,
    40,
    200
);