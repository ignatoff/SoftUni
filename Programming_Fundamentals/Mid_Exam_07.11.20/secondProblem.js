function loot(array) {

    let loot = array.shift().split('|');
    let command = array.shift().split(' ');
    let gain = 0;

    while (command != 'Yohoho!') {
        let action = command.shift();

        if (action == 'Loot') {
            command.forEach(item => {
                if (!loot.includes(item)) loot.unshift(item);
            });
        } else if (action == 'Drop') {
            let index = Number(command[0]);

            if (index > -1 && index < loot.length) {
                let dropped = loot.splice(index, 1);
                loot.push(dropped[0]);
            }
        } else if (action == 'Steal') {
            let count = Number(command[0]);

            if (loot.length <= count) {
                console.log(loot.join(', '));
                loot.splice(-count);
            } else {
                let stealed = loot.splice(-count);
                console.log(stealed.join(', '));
            }
        }
        command = array.shift().split(' ');
    }
    loot.forEach(item => gain += item.length);
    let total = gain / loot.length;

    if (loot.length < 1) {
        console.log(`Failed treasure hunt.`);        
    } else {
        console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`);
    }
}

loot(
    ["Diamonds|Silver|Shotgun|Gold",
        "Loot Silver Medals Coal",
        "Drop -1",
        "Drop 1",
        "Steal 6",
        "Yohoho!"]

);