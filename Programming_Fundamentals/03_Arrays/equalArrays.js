function equalArrays(firstArr, secondArr) {

    let sum = 0;
    let isSame = true;
    let diff = 0;

    for (let i = 0; i < firstArr.length; i++) {
        let a = Number(firstArr[i]);
        let b = Number(secondArr[i]);

        if (a != b) {
            diff = i;
            isSame = false;
            break;
        } else {
            sum += a;
        }
    }

    if (isSame) {
        console.log(`Arrays are identical. Sum: ${sum}`);

    } else {
        console.log(`Arrays are not identical. Found difference at ${diff} index`);
        
    }
}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);