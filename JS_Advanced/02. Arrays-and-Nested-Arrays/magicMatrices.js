function magicMatrices(array) {

    let rowSums = array.map((el) => el.reduce((a, b) => a + b), 0);
    let colSums = array[0].map((_, col) => array.map((row) => row[col])).map(row => row.reduce((a, b) => a + b));

    return rowSums.concat(colSums).every((el, i, arr) => el === arr[0]);
}

    /*
    let result = [];
    let isMagic = true;
    for (let i = 0; i < array.length; i++) {
        let rowSum = 0;
        let colSum = 0;

        for (let j = 0; j < array.length; j++) {
            rowSum += array[i][j];
            colSum += array[j][i];            
        }
        
        result.push(rowSum, colSum)
    }

    for (const num of result) {
        
        if (num != result[0]) isMagic = false;
    }
    return isMagic;
    */
/*
function solve(arr) {
 
    //Намираме сумите на всички редове
    // for (let i = 0; i < arr.length; i++) {
    //     let row = arr[i];
    //     let sum = row.reduce((result, curr) => (result + curr), 0);
    //     rowSums.push(sum);
    // }
 
 
    //Намираме сумите на всички колони
    // for (let i = 0; i < arr.length; i++) {
    //     let newRow = []
    //     for (let y = 0; y < arr.length; y++) {
    //         newRow.push(arr[y][i])
    //     }
 
    //     let sum = newRow.reduce((result, curr) => (result + curr), 0);
    //     colSums.push(sum);
    // }
 
    //Събираме резултатите в един масив и проверяваме дали всички елементи са еднакви
 
    // for (let i = 0; i < rowSums.length; i++) {
    //     if (rowSums[i] !== colSums[i] || rowSums[0] !== rowSums[i]) {
    //         return false;
    //     }
    // }
 
    //     return true;
}
*/
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));
