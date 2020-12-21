function firstLast(array) {
    let a = Number(array[0]);
    let b = Number(array.pop());

    return a + b;
}

console.log(firstLast(['20', '30', '4']));
