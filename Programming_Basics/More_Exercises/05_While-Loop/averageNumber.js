function averageNumber(input) {

    let num = Number(input[0]);
    let sum = 0;
    
    for (let i = 1; i < input.length; i++){
        let next = Number(input[i]);
        sum += next;
    }
    let total = sum / num;
    console.log(total.toFixed(2));    
}

averageNumber([
    "4",
    "95",
    "23",
    "76",
    "23"
]);