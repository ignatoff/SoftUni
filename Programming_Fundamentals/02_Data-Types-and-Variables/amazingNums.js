function amazingNums(num) {

    let sum = 0;
    let numAsString = num.toString();

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result
        ? `${num} Amazing? True`
        : `${num} Amazing? False`);
    
}

amazingNums(583472);