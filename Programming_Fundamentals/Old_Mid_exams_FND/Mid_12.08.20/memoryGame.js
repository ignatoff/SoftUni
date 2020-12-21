function memoryGame(array) {

    let board = array.shift().split(' ');
    let command = array.shift().split(' ');
    let moves = 0;

    while (command != 'end') {
        moves++;
        let final = board.length - 1;
        let [index1, index2] = command.map(Number);

        if (index1 == index2 || index1 < 0 || index2 < 0 || index1 > final || index2 > final) {
            board.splice(Math.ceil(final / 2), 0, `-${moves}a`, `-${moves}a`);
            console.log(`Invalid input! Adding additional elements to the board`);
            command = array.shift().split(' ');
            continue;
        }

        if (board[index1] == board[index2]) {
            let i = Math.min(index1, index2);
            let j = Math.max(index1, index2);
            console.log(`Congrats! You have found matching elements - ${board[index1]}!`);
            board.splice(j, 1);
            board.splice(i, 1);
        } else {
            console.log(`Try again!`);
        }

        if (board.length < 1) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
        command = array.shift().split(' ');
    }

    if (board.length > 0) {
        console.log(`Sorry you lose :(\n${board.join(' ')}`);
    }
}

memoryGame(
    [
        "1 1 2 2 3 3 4 4 5 5",
        "1 0",
        "-1 0",
        "1 0",
        "1 0",
        "1 0",
        "end"
    ]
);