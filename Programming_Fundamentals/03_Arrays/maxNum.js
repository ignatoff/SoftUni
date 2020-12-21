function maxNum(array) {

    let result = '';

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let isBigger = true;

        for (let j = i + 1; j < array.length; j++) {
            
            if (element <= array[j]) {
                isBigger = false;
                break;
            }
        }
        
        if (isBigger) {
            result += `${element} `;
        }
    }
    console.log(result);    
}

maxNum(
    [14, 24, 3, 19, 15, 17]
    );