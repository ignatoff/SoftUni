function equalSums(array) {

    let index = 0;
    let isEqual = false;
    
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
         
        for (let j = 0; j < i; j++) {
            leftSum += array[j];            
        }

        for (let k = i + 1; k < array.length; k++) {
            rightSum += array[k]
        }

        if (leftSum == rightSum){
            index = i;
            isEqual = true;
        }
    }
    if (isEqual){
        console.log(index);        
    } else if (array.length < 2){
        console.log(`0`);
    } else {
        console.log(`no`);        
    }
}

equalSums(
    [10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]
    );