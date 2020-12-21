function dungeonestDark(array) {

    let health = 100;
    let coins = 0;
    let numRoom = 0;
    let isDead = false;
    let zero = array.toString();
    let one = zero.split('|');

    for (let level of one) {
        let rooms = level.split(' ');
        let string = rooms[0];
        let number = Number(rooms[1]);
        numRoom++;

        if (isDead) {
            break;
        }

        switch (string) {
            case 'potion':
                if ((health + number) > 100) {
                    number = 100 - health;
                    console.log(`You healed for ${number} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                } else {
                    health += number;
                    console.log(`You healed for ${number} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                break;
            case 'chest': coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default: health -= number;
                if (health > 0) {
                    console.log(`You slayed ${string}.`);
                } else {
                    console.log(`You died! Killed by ${string}.`);
                    console.log(`Best room: ${numRoom}`);
                    isDead = true;
                }
                break;
        }
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(
    ['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']
);