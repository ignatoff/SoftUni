function print(n, j) {

    let sum = 0;
    let rec = '';

    for (let i = n; i <= j; i++) {
        sum += i;
        rec += i + ' ';
    }
    console.log(rec);
    console.log(`Sum: ${sum}`);
    
}

print(5, 10);