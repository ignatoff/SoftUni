function tickets(array, criteria) {
    const list = {
        destination: ((a, b) => a.destination.localeCompare(b.destination)),
        price: ((a, b) => a.price - b.price),
        status: ((a, b) => a.status.localeCompare(b.status)),
    }

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return array
        .map(line => line = line.split('|'))
        .map(t => {
            [destination, price, status] = t;
            return new Ticket(destination, price, status)
        })
        .sort(list[criteria]);
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'

));