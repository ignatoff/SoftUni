function sorting(array) {

    let sorted = array.sort(checkSort).length;
    let mixed = [];

    for (let i = 0; i < sorted / 2; i++) {
        let big = array.pop();
        let small = array.shift();
        mixed.push(big, small);
    }

    function checkSort(a, b) {
        
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    }
    console.log(mixed.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
