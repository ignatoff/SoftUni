function arrayRotation(array, n) {

    let resultArr = [];
    let rotations = n % array.length;

    for (let j = rotations; j < array.length; j++) {
        let element = array[j];
        resultArr.push(element);        
    }
    
    for (let i = 0; i < rotations; i++) {
        let element = array[i];
        resultArr.push(element);
    }
    console.log(resultArr.join(' '));        
}

arrayRotation(
    [2, 4, 15, 31], 
    5
    );