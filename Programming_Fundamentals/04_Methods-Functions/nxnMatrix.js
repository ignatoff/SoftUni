function nxnMartix(n) {
    
    let array = [];

    while (array.length < n) {
        array.push(n);
    }
    let result = '';
    for (let i = 0; i < array.length; i++) {
        console.log(array.join(' '));                
    }
}

nxnMartix(5);
