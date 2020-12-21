function processOdd(array) {

    let oddArray = array.filter((num, i) => i % 2 == 1)
        .map(y => y * 2)
        .reverse();
    console.log(oddArray.join(' '));
}

processOdd([3, 0, 10, 4, 7, 3]);