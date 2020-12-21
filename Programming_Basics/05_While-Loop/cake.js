function solve(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let cake = width * length;
    let piecesTaken = input[index];
    let total = 0;

    while (total < cake) {

        if (piecesTaken === "STOP") {
            console.log(`${cake - total} pieces are left.`);
            break;
        }
        piecesTaken = Number(input[index]);
        total += piecesTaken;
        index++;
        piecesTaken = input[index];
    }
    if (total >= cake) {
        console.log(`No more cake left! You need ${total - cake} pieces more.`);

    }
}

solve([
    "10",
    "2",
    "2",
    "4",
    "4",
    "6",
    "6",
    "STOP"])
    ;
