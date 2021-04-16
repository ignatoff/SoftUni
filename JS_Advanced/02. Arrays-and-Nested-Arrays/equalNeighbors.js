function equalNeighbors(array) {

    let isPair = 0;

    for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array[i].length; j++) {
            let a = array[i][j];
            let b = array[i + 1][j];

            if (a === b) isPair++;
        }
    }

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {
            let a = array[i][j];
            let c = array[i][j + 1];
            
            if (a === c) isPair++;
        }
    }

    return isPair;
}

console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));
