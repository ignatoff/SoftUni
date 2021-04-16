class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.availability = {
            single: capacity * 0.5,
            double: capacity * 0.3,
            maisonette: capacity * 0.2,
        };
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135,
        };
    }

    rentARoom(name, type, nights) {
        if (this.availability[type] > 0) {
            const bookingNum = this.currentBookingNumber;
            this.bookings.push({ name, type, nights, bookingNum });
            this.currentBookingNumber++;
            this.availability[type]--;

            return `Enjoy your time here Mr./Mrs. ${name}. Your booking is ${bookingNum}.`;
        }
        let result = `No ${type} rooms available! `;
        Object.entries(this.availability)
            .forEach(([type, count]) => {
                if (count) {
                    result += `Available ${type} rooms: ${count}. `;
                }
            });

        return result.trim();
    }

    checkOut(num) {
        const guest = this.bookings.find(b => b.bookingNum == num);
        if (guest) {
            const totalMoney = guest.nights * this.roomsPricing[guest.type];
            this.availability[guest.type]++;
            this.bookings = this.bookings.filter(b => b.bookingNum != num);

            return `We hope you enjoyed your time here, Mr./Mrs. ${guest.name}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        }

        return `The booking ${num} is invalid.`
    }

    report() {
        if (this.bookings.length == 0) {
            return `${this.name.toUpperCase()} DATABASE:\n--------------------\nThere are currently no bookings.`
        }
        let result = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
        const list = Object.values(this.bookings)
            .map(b => b = `bookingNumber - ${b.bookingNum}\nclientName - ${b.name}\nroomType - ${b.type}\nnights - ${b.nights}`);

        return result + list.join('\n----------\n');
    }
}

let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
console.log(hotel.checkOut(4));
console.log(hotel.report());