function divisibleBy9(a, b) {

    a = Number(a);
    b = Number(b);
    let sum = 0;

    for (i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);

    for (z = a; z <= b; z++) {
        if (z % 9 === 0) {
            console.log(z);
        }
    }
}

divisibleBy9("100", "200");