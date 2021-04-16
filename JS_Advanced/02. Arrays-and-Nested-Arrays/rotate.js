function rotate(array, rotations) {
    
    rotations %= array.length;

    for (let i = 0; i < rotations; i++) {
        let el = array.pop();
        array.unshift(el);        
    }

    return array.join(' ');
}

console.log(rotate(['1', 
'2', 
'3', 
'4'], 
2
));
console.log(rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));
