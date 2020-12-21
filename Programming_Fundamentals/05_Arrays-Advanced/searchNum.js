function searchNum(array, command) {

    let taken = command[0];
    let deleted = command[1];
    let searching = command[2];
    let count = 0;

    let numArr = array.slice(0, taken);
    numArr.splice(0, deleted);

    for (const n of numArr) {
        
        if (searching == n) count++;
    }
    console.log(`Number ${searching} occurs ${count} times.`);    
}

searchNum(
    [5, 2, 3, 4, 3, 1, 6],
    [5, 2, 3]
);