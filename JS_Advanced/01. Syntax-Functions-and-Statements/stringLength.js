function stringLength(a, b, c) {

    let total = (a + b + c).length;
    return `${total}\n${Math.floor(total / 3)}`;
}

console.log(stringLength('chocolate', 'ice cream', 'cake'));
console.log(stringLength('pasta', '5', '22.3'));
