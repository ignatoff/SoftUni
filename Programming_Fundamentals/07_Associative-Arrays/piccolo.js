function piccolo(array) {

    let parkingLot = new Set();

    for (const line of array) {
        let [direction, carNum] = line.split(', ');

        if (direction == 'IN' && !parkingLot.has(carNum)) parkingLot.add(carNum);
        else if (direction == 'OUT' && parkingLot.has(carNum)) parkingLot.delete(carNum);
    }
    
    if (parkingLot.size > 0) {
        let sorted = [...parkingLot]
        .sort((a, b) => a.localeCompare(b))
        .forEach(num => console.log(num));
    } else {
        console.log(`Parking Lot is Empty`);        
    }    
}

piccolo(
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']


);