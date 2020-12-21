function kkNumbers(array) {

    let k = array.shift();
    let first = array.slice(0, k);
    let last = array.slice(-k);

    console.log(first.join(' '));
    console.log(last.join(' '));   
    
}

kkNumbers([3, 7, 8, 5, 9]);
