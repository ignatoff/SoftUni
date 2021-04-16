function tictactoe(array) {

    let player = 'X';
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    for (let i = 0; i < array.length; i++) {
        const move = array[i];
        const [x, y] = Number(move.split(' '));
        
        i % 2 == 0 ? player = 'X' : player = 'O';

        if (board[x][y] == false) board[x][y] = player;
        else continue;
    }
}

console.log(tictactoe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]));

console.log(`---------------------------------`);

console.log(tictactoe([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]));

console.log(`---------------------------------`);

console.log(tictactoe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]));
