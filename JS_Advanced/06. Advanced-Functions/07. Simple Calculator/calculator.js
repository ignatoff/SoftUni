function calculator() {
    let firstNum;
    let secondNum;
    let result;
    
    return {
        init(selector1, selector2, resultSelector) {
            firstNum = document.querySelector(selector1);
            secondNum = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add() {
            result.value = Number(firstNum.value) + Number(secondNum.value);
        },
        subtract() {
            result.value = Number(firstNum.value) - Number(secondNum.value);
        },
    }
}

let elka = calculator();
elka.init('num1', 'num2', 'result')
document.getElementById('sumButton').addEventListener('click', elka.add);
document.getElementById('subtractButton').addEventListener('click', elka.subtract);