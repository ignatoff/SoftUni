function substraction(array) {

    let diff = 0;
    let even = 0;
    let odd = 0;

    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);

        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }  
    }
    diff = even - odd;
    console.log(diff);          
}

substraction([1,2,3,4,5,6]);