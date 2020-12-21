function shoot(array) {
    
    let targets = array.shift().split(' ').map(Number);
    let i = array.shift();
    let shooted = 0;

    while (i != 'End') {
        i = Number(i);

        if (targets[i] != -1 && i < targets.length) {
            shooted++;

            for (let j = 0; j < targets.length; j++) {
                
                if (targets[j] > targets[i] && j != i && targets[j] != -1) {
                    targets[j] -= targets[i];
                } else if (targets[j] <= targets[i] && j != i && targets[j] != -1) {
                    targets[j] += targets[i];
                }                
            }
            targets[i] = -1;
        }
        i = array.shift();
    }
    console.log(`Shot targets: ${shooted} -> ${targets.join(' ')}`);    
}

shoot(
    [ '24 50 36 70', '0', '4', '3', '1', 'End' ]
);

shoot(
    [ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]
);