function sortingNums(array) {
    
    let result = [];
    array.sort((a, b) => a - b);
    let cloned = array.slice();

    for (let i = 0; i < array.length / 2; i++) {
        result.push(cloned.shift());
        if (cloned[cloned.length - 1] != undefined) result.push(cloned.pop());
    }

    return result;
}

console.log(sortingNums([1, 65, 3, 52, 63, 31, -3, 18, 56]));
