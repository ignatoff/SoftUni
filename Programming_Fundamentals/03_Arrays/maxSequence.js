function maxSequence(array) {

    let rec = '';
    let max = 0;

    for (let i = array.length - 1; i >= 0; i--) {
        let counter = 0;

        for (let j = i - 1; j >= 0; j--) {

            if (array[j] == array[i]) {
                counter++;

                if (counter >= max) {
                    max = counter;

                    if (counter == 1) {
                        rec = '';
                        rec += `${array[i]} ${array[j]}`;
                    } else {
                        rec += ` ${array[j]}`;
                    }
                }
            } else {
                break;
            }
        }
    }
    console.log(rec);    
}

maxSequence(
    [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]
);