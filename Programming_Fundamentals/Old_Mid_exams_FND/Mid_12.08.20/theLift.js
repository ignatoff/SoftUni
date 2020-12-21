function theLift(array) {

    let people = Number(array.shift());
    let lift = array.shift().split(' ').map(Number);
    let reduced = lift.reduce((a, c) => a + c, 0);

    for (let i = 0; i < lift.length; i++) {
        
        if (people <= 0 || reduced == lift.length * 4) break;
        
        if (lift[i] < 4) {
            
            if (people - (4 - lift[i]) < 0) {
                lift[i] += people;
                people -= people;
            } else {
                people -= 4 - lift[i];
                lift[i] = 4;
            }        
        }
        reduced = lift.reduce((a, c) => a + c, 0);
    }

    if (people > 0 && reduced == lift.length * 4) {
        console.log(`There isn't enough space! ${people} people in a queue!\n${lift.join(' ')}`);        
    } else if (people <= 0 && reduced == lift.length * 4) {
        console.log(lift.join(' '));        
    } else {
        console.log(`The lift has empty spots!\n${lift.join(' ')}`);
    }
}

theLift(
    [
        "20",
        "0 2 0"
    ]
);