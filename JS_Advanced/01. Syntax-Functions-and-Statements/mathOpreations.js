function mathOperations(a, b, str) {
    
    if (str == '+') return a + b;
    else if (str == '-') return a - b;
    else if (str == '*') return a * b;
    else if (str == '/') return a / b;
    else if (str == '%') return a % b;
    else if (str == '**') return a ** b;
}

console.log(mathOperations(15, 6, '%'));
console.log(mathOperations(3, 5.5, '*'));
