class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {

        if (this.capacity <= 0) {
            throw new Error(`Not enough parking space.`);
        }
        this.vehicles.push({ carModel, carNumber, payed: false });
        this.capacity--;

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        const car = this.vehicles.find(car => car.carNumber == carNumber);

        if (!car) {
            throw new Error(`The car, you're looking for, is not found.`);
        }

        if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        this.vehicles = this.vehicles.filter(car => car.carNumber != carNumber);
        this.capacity++;

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        const car = this.vehicles.find(car => car.carNumber == carNumber);

        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        // const isPayed = isFound.filter(car => car.payed == false);

        if (car.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        car.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        let result = '';

        if (!carNumber) {
            result += `The Parking Lot has ${this.capacity} empty spots left.\n`;
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(car => {
                    result += `${car.carModel} == ${car.carNumber}`;
                    car.payed == true ? result += ` - Has payed\n` : result += ` - Not payed\n`;
                });

            return result.trim();
        }
        const car = this.vehicles.find(car => car.carNumber == carNumber)
        result += `${car.carModel} == ${car.carNumber}`;
        car.payed == true ? result += ` - Has payed` : result += ` - Not payed`;

        return result;
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("fdg t600", "TX3641CA"));
console.log(parking.addCar("dfg t600", "TX8691CA"));
console.log(parking.getStatistics('TX8691CA'));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));