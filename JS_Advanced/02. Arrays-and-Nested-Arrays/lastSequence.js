function lastSequence(n, k) {
    
    const array = [1];

    for (let i = 1; i < n; i++) {
        let seq = i - k;

        if (seq < 0) seq = 0;

        const num = array.slice(seq, seq + k).reduce((acc, c) => acc + c, 0);
        array.push(num);
    }

    return array;
}

console.log(lastSequence(6, 3));
console.log(lastSequence(8, 2));
