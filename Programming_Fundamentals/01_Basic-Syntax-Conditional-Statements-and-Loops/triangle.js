function triangle(n) {

    let rec = '';

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= i; j++) {
            rec += i + ' ';
        }
        console.log(rec);
        rec = '';
    }
}

triangle(5);