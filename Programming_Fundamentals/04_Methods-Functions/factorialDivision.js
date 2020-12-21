function factorialDivision(a, b) {

    if (a <= 1) a = 1;
    if (b <= 1) b = 1;
    
    let sum1 = a;
    let sum2 = b;

    for (let i = a - 1; i >= 1; i--) {
        sum1 *= i;
    }

    for (let j = b - 1; j >= 1; j--) {
        sum2 *= j;
    }
    return (sum1 / sum2).toFixed(2);
}

console.log(factorialDivision(4, 2));



function factorialDivision(a, b) {

    function factorial(num) {

        if (num <= 1) return 1;
        else return (num * factorial(num - 1));
    }
    
    return (factorial(a) / factorial(b)).toFixed(2);
    }

console.log(factorialDivision(5, 2));