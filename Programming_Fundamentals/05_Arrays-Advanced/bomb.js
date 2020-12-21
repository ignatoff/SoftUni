function bomb(array, bomb) {

    let index = bomb[0];
    let power = bomb[1];
    let equal = 0;

    while (equal > -1) {
        equal = array.indexOf(index);

        if (equal == -1) break;

        array.splice(Math.max((equal - power), 0), Math.min(power, equal));
        equal = Math.max((equal - power), 0);
        array.splice(equal, (power + 1));
    }
    let sum = 0;

    for (const n of array) {
        sum += n;
    }
    console.log(sum);
}

bomb(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1], //expected output 4
    [2, 1]
);