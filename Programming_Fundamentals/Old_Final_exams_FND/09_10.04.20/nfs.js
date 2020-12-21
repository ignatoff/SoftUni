function nfs(array) {

    let commands = {
        Drive(cars, carName, dist, fuel) {

            [dist, fuel] = [Number(dist), Number(fuel)];
            let car = cars[carName];

            if (car.fuel < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                car.mileage += dist;
                car.fuel -= fuel;
                console.log(`${carName} driven for ${dist} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (car.mileage >= 100000) {
                console.log(`Time to sell the ${carName}!`);
                delete cars[carName];
            }
        },
        Refuel(cars, carName, fuel) {

            fuel = Number(fuel);
            let car = cars[carName];
            console.log(`${carName} refueled with ${Math.min(75 - car.fuel, fuel)} liters`);
            car.fuel = Math.min(car.fuel + fuel, 75);
        },
        Revert(cars, carName, km) {

            km = Number(km);
            let car = cars[carName];

            if (car.mileage - km >= 10000) {
                car.mileage -= km;
                console.log(`${carName} mileage decreased by ${km} kilometers`);
            } else {
                car.mileage = 10000;
            }
        }
    }
    let num = Number(array.shift());
    let cars = {};
    let line;

    for (let i = 0; i < num; i++) {
        let [carName, mileage, fuel] = array.shift().split('|');
        cars[carName] = {
            mileage: Number(mileage), 
            fuel: Number(fuel)
        };
    }

    while ((line = array.shift()) != 'Stop') {
        let [commandName, carName, ...args] = line.split(' : ');
        let command = commands[commandName](cars, carName, ...args);
    }

    let sorted = Object.entries(cars)
        .sort(compare)
        .forEach(kvp => {
            console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);            
        });

    function compare(a, b) {
        return b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]);
    }
}

nfs(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
);

console.log(`---------------------`);

nfs(
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
    ]
);