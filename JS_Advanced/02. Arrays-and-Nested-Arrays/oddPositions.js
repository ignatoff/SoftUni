function oddPositions(array) {
    
    return array.filter((x, i) => i % 2 == 1)
                .map(x => x * 2)
                .reverse()
                .join(' ');
}

console.log(oddPositions([10, 15, 20, 25]));
console.log(oddPositions([3, 0, 10, 4, 7, 3]));
