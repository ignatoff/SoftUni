function depositCalculator(arg1, arg2, arg3) {

    let sum = Number(arg1);
    let term = Number(arg2);
    let interest = Number(arg3) / 100;

    let result = sum + term * ((sum * interest) / 12);

    console.log(result);

}

depositCalculator("200", "3", "5.7");