function magicSum(array, n) {

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if ((array[j] + array[i]) == n) {
               console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}

magicSum(
    [6, 5, 3, 4, 3, 3],
    7
);