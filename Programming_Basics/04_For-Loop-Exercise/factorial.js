function factorial(num){

    num = Number(num);
    let sum = 1;  

    for (let i = 2; i <= num; i++){
        sum *= i;        
    }
    console.log(sum);

}

factorial("5")