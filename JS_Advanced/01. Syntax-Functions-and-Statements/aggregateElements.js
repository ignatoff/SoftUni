function aggregateElements(array) {
    
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (const el of array) {
        sum += el;
        inverseSum += 1 / el;
        concat += el;    
    }

    return `${sum}\n${inverseSum}\n${concat}`
}

console.log(aggregateElements([1, 2, 3]));
console.log(aggregateElements([2, 4, 8, 16]));
