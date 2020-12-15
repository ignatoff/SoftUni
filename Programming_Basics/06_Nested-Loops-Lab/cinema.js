function solve(input) {

    let index = 0;
    let movie = input[index];
    index++;
    let capacity = Number(input[index]);
    index++;
    let type = input[index];
    index++;

    let seatsStudent = 0;
    let seatsStandart = 0;
    let seatsKid = 0;
    let tickets = 0;
    let totalTickets = 0;

    while (movie !== "Finish" && index < input.length) {

        while (type !== "End") {
            tickets++;
            if (type === "student") {
                seatsStudent++;
            } else if (type === "standard") {
                seatsStandart++;
            } else if (type === "kid") {
                seatsKid++;
            }

            if (tickets === capacity){
                break;
            }

            type = input[index];
            index++;
        }
        let percent = (tickets / capacity) * 100;
        console.log(`${movie} - ${percent.toFixed(2)}% full.`);
        totalTickets += tickets;
        tickets = 0;
        movie = input[index];
        index++;
        capacity = Number(input[index]);
        index++;
        type = input[index];
        index++;

        if (type == undefined){
            break;
        }
    }
    let studentPercent = (seatsStudent / totalTickets) * 100;
    let standardPercent = (seatsStandart / totalTickets) * 100;
    let kidPercent = (seatsKid / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);    
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
    

}

solve(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
;
