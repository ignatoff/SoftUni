function oddEven(num) {

    let array = num.toString().split('');
    let oddSum = 0;
    let evenSum = 0;

    function sumCounting(a) {

        for (const index of array) {
            let digit = Number(index);
            digit % 2 == 0 ? evenSum += digit : oddSum += digit;
        }
        let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

        return result;
    }
    return sumCounting(num);
}

console.log(oddEven(3495892137259234));
