function mergeArrays(firstArr, secondArr) {

    let arr = [];

    for (let i = 0; i < firstArr.length; i++) {

        if (i % 2 == 0) {
            arr[i] = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            arr[i] = (`${firstArr[i]}${secondArr[i]}`);
        }
    }
    console.log(arr.join(' - '));
}

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);