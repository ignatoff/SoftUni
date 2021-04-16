function diagonalSums(matrix) {

    let mainSum = 0;
    let secSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secSum += matrix[i][matrix.length - i - 1];        
    }

    return `${mainSum} ${secSum}`;
}

console.log(diagonalSums([
    [20, 40],
    [10, 60]
]));
console.log(diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));
