function signCheck(numOne, numTwo, numThree){

    let array = [numOne, numTwo, numThree]
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] >= 0 ? positive++ : negative++;        
    }
    
    if (negative % 2 != 0 && numOne != 0 && numTwo != 0 && numThree != 0){
        console.log(`Negative`);        
    } else {
        console.log(`Positive`);        
    }
}

signCheck(5, 12, -15);