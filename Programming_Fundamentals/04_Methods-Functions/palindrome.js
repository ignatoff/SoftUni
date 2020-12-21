function palindrome(array) {

    let result = '';

    for (let i = 0; i < array.length; i++) {
        let str = String(array[i]);
        let isEqual = 'true';
        
        for (let j = 0; j < str.length / 2; j++) {
            let num1 = Number(str[j]);
            let num2 = Number(str[str.length - 1 - j]);

            if (num1 != num2) {
                isEqual = 'false';
                break;                
            }            
        }
        result += isEqual + '\n';
    }
    return result;
}

console.log(palindrome([
    123,
    323,
    421,
    121
]));
