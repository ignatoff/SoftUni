function reverseStrArray(array) {

    for (let i = 0; i < array.length / 2; i++) {
        let start = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = start;
    }
    console.log(array.join(' '));           
}

reverseStrArray(['33', '123', '0', 'dd']);