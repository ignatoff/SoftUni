function distinctArray(array) {
    
    let distinct = [];

    for (let element of array) {
        if (!distinct.includes(element)) distinct.push(element);
    }
    return distinct.join(' ');
}

console.log(distinctArray([20, 8, 12, 13, 4, 4, 4, 8, 5]));
