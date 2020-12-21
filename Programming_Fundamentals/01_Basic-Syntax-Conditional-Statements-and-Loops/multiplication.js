function multiplication(n) {

    let result = 0;

    for (let i = 1; i <= 10; i++) {
        result = n * i;
        console.log(`${n} X ${i} = ${result}`);
        
    }
}

multiplication(5);