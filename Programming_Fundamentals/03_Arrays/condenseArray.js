function condenseArray(array) {
    
    let cond = [];

    while (array.length > 1) {
        cond = [];

        for (let i = 0; i < array.length - 1; i++) {
            cond[i] = array[i] + array[i + 1];
        }
        array = cond;
    }
    console.log(array.join());

}

condenseArray([5, 0, 4, 1, 2]);