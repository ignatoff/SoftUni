function heartDelivery(array) {

    let hood = array.shift().split('@').map(Number);
    let command = array.shift().split(' ');
    let already = [];
    let length = 0;
    let lastPos = -1;

    while (command != 'Love!') {
        length += Number(command[1]);

        if (length >= hood.length) {
            length = 0;
        }

        if (hood[length] == 0) {
            console.log(`Place ${length} already had Valentine's day.`);
            already.push(length)
        }        
        hood[length] = Math.max(hood[length] - 2, 0);

        if (hood[length] == 0 && !already.includes(length)) {
            console.log(`Place ${length} has Valentine's day.`);            
        }
        command = array.shift().split(' ');
        lastPos = length;
    }
    let failed = hood.filter(x => x > 0);

    console.log(`Cupid's last position was ${lastPos}.`);

    if (failed.length < 1) {
        console.log(`Mission was successful.`);        
    } else {
        console.log(`Cupid has failed ${failed.length} places.`);        
    }    
}

heartDelivery(
    [
        '2@4@2', 'Jump 2',
        'Jump 2', 'Jump 8',
        'Jump 3', 'Jump 1',
        'Love!'
    ]
);