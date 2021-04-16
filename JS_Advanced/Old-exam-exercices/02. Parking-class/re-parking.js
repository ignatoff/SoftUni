class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity - 1 < 0) {
            throw new Error('Not enough parking space.');
        }
        this.capacity--;
        this.vehicles.push({carModel, carNumber, payed: false});
        
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    
    removeCar(carNumber) {
        const car = this.vehicles.find(v => v.carNumber == carNumber);
        if (!car) {
            throw new Error('The car, you\'re looking for, is not found.');
        }
        if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        this.capacity++;
        this.vehicles = this.vehicles.filter(v => v.carNumber != carNumber);

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        const car = this.vehicles.find(v => v.carNumber == carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (car.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        this.vehicles.forEach(v => {
            if (v.carNumber == carNumber) {
                v.payed = true;
            }
        });

        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if (carNumber) {
            const car = this.vehicles.find(v => v.carNumber == carNumber);
            
            return `${car.carModel} == ${car.carNumber} - ${car.payed == true ? 'Has payed' : 'Not payed'}`
        }
        let result = `The Parking Lot has ${ this.capacity } empty spots left.\n`;
        this.vehicles
            .sort((a, b) => a.carModel.localeCompare(b.carModel))
            .forEach(v => result += `${v.carModel} == ${v.carNumber} - ${v.payed == true ? 'Has payed' : 'Not payed'}\n`);

        return result.trim();
    }
}

const parking = new Parking(12);

console.log(parking.addCar("xedrzhf", "TX36691CA"));
console.log(parking.addCar("aspaf", "TX91CA"));
console.log(parking.pay("TX91CA"));
console.log(parking.getStatistics());
console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

/*

The Volvo t600, with a registration number TX3691CA, parked.
The Parking Lot has 11 empty spots left.
Volvo t600 == TX3691CA - Not payed
TX3691CA's driver successfully payed for his stay.
TX3691CA left the parking lot.
 */