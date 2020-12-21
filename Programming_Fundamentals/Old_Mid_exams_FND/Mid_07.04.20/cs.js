function cs(array) {
    
    let energy = Number(array.shift());
    let enemy = array.shift();
    let wonBattles = 0;
    
    while (enemy != 'End of battle') {
        enemy = Number(enemy);

        if (energy - enemy < 0){
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;            
        }
        energy -= enemy;
        wonBattles++;

        if (wonBattles % 3 == 0) energy += wonBattles;

        enemy = array.shift();
    }

    if (enemy == 'End of battle') console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);    
}

cs(
    [ '200', '54', '14', '28', '13', 'End of battle' ]
);