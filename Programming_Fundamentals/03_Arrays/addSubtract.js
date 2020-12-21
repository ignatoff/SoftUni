function addSubtract(array) {

    let sum = 0;
    let newSum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        if (array[i] % 2 == 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
        newSum += array[i];
    }     
    console.log(array);          
    console.log(sum);          
    console.log(newSum);          
}

addSubtract([-5, 11, 3, 0, 2]);