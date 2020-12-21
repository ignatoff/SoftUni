function springTrip(array) {

    array = array.map(Number);

    let days = array.shift();
    let budget = array.shift();
    let people = array.shift();
    let pricePerKm = array.shift();
    let foodExpences = array.shift();
    let roomPrice = array.shift();

    if (people > 10) roomPrice *= 0.75;
    let currentExp = (roomPrice + foodExpences) * people * days;
    let counterDays = 0;
    let diff = 0;

    for (const day of array) {
        let expPerDay = day * pricePerKm;
        counterDays++;        
        currentExp += expPerDay;
        
        if (counterDays % 3 == 0 || counterDays % 5 == 0) currentExp += currentExp  * 0.40;

        if (counterDays % 7 == 0) currentExp -= (currentExp / people);

        diff = Math.abs(budget - currentExp).toFixed(2);

        if (budget < currentExp) {
            console.log(`Not enough money to continue the trip. You need ${diff}$ more.`);
            break;
        }
    }
    if (budget >= currentExp) console.log(`You have reached the destination. You have ${diff}$ budget left.`);
    
}

springTrip(
    [
        '10',  '20500', '11',
        '1.2', '8',     '13',
        '100', '150',   '500',
        '400', '600',   '130',
        '300', '350',   '200',
        '300'
      ]
);