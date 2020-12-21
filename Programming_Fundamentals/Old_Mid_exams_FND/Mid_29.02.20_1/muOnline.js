function muOnline(str) {
    
    let health = 100;
    let bitcoins = 0;
    let rooms = str.split('|');
    let bestRoom = 0;
    let isDead = false;

    for (const level of rooms) {
        let command = level.split(' ');
        let action = command[0];
        let num = Number(command[1]);
        bestRoom++;

        if (action == 'potion') {
            if ((health + num) > 100) console.log(`You healed for ${100 - health} hp.`);
            else console.log(`You healed for ${num} hp.`);
            health = Math.min(health + num, 100);
            console.log(`Current health: ${health} hp.`);            
        } else if (action == 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);            
        } else {
            health -= num;
            if (health <= 0) {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${bestRoom}`);  
                isDead = true;
                break;             
            } else {
                console.log(`You slayed ${action}.`);                
            }
        }
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);       
    }
}  

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');