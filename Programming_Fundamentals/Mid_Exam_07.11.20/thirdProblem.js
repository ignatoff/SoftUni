function warShips(array) {

    let pirateShip = array.shift().split('>').map(Number);
    let warShip = array.shift().split('>').map(Number);
    let maxHealth = Number(array.shift());
    let command = array.shift().split(' ');
    let isStalemate = true;

    while (command != 'Retire') {
        let action = command.shift();

        if (action == 'Fire') {
            let [index, damage] = command.map(Number);

            if (index > -1 && index < warShip.length) {
                warShip[index] -= damage;

                if (warShip[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    isStalemate = false;
                    break;
                }
            }
        } else if (action == 'Defend') {
            let [start, end, damage] = command.map(Number);

            for (let i = start; i <= end; i++) {

                if (i >= pirateShip.length) continue;

                if (pirateShip[i] - damage <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    isStalemate = false;
                    break;
                } else {
                    pirateShip[i] -= damage;
                }
            }
        } else if (action == 'Repair') {
            let [index, health] = command.map(Number);

            if (index > -1 && index < pirateShip.length) {
                pirateShip[index] = Math.min((pirateShip[index] + health), maxHealth);
            }
        } else if (action == 'Status') {
            let forRepair = pirateShip.filter(x => x < maxHealth * 0.20).length;
            console.log(`${forRepair} sections need repair.`);            
        }
            
        command = array.shift().split(' ');
    }

    if (isStalemate) {
        let sumPirate = pirateShip.reduce((a, c) => a + c, 0);
        let sumWar = warShip.reduce((a, c) => a + c, 0);
        console.log(`Pirate ship status: ${sumPirate}\nWarship status: ${sumWar}`);        
    }
}

warShips(
    ["2>3>7>5>9",
        "4>7>8>3>10>11",
        "17",
        "Status",
        "Fire 5 8",
        "Defend 2 6 2",
        "Repair 2 10",
        "Retire"]
);

warShips(
    ["2>3>4>5>6",
        "2>3>4>5>6>10>11",
        "15",
        "Fire -1 22",
        "Fire 22 44",
        "Fire 1 1",
        "Retire"]
);