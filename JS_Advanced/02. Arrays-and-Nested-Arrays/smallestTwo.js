function smallestTwo(array) {
    
    let sorted = array.sort((a, b) => a - b).filter((x, i) => i < 2);

    return sorted.join(' ');
}

console.log(smallestTwo([30, 15, 50, 5]));
console.log(smallestTwo([3, 0, 10, 4, 7, 3]));
