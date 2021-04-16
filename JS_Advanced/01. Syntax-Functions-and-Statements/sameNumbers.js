function sameNumbers(int) {
    
    let str = int + '';
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
        
        if (str[i] != str[i + 1] && str[i + 1] != undefined) isSame = false;
    }

    return `${isSame}\n${sum}`
}

console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));
