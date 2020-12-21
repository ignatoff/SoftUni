function kSequence(n, k) {

    let array = [1];
    
    for (let i = 1; i < n; i++) {
        let lastK = array.slice(-k);
        let sum = 0;

        for (const num of lastK) {
            sum += num;
        }
        array.push(sum)
    }
    console.log(array.join(' '));    
}

kSequence(8, 2);