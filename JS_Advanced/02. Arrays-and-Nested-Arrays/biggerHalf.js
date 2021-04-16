function biggerHalf(array) {
    
    let half = array.sort((a, b) => a - b).slice(Math.floor(array.length / 2));
    
    return half;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
