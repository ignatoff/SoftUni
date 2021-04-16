function firstLast(array) {
    
    const first = Number(array[0]);
    const last = Number(array[array.length - 1]);

    return first + last;
}

console.log(firstLast(['20', '30', '40']));
console.log(firstLast(['5', '10']));