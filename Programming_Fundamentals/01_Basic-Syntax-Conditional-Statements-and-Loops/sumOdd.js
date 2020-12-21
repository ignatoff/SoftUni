function sumOdd(n) {

    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= 200; i++) {

        if (i % 2 != 0){
            counter++;
            sum += i;
            console.log(i);

        }    
        
        if (counter == n){
            break;
        }
    }
    console.log(`Sum: ${sum}`);
    
}

sumOdd(5);