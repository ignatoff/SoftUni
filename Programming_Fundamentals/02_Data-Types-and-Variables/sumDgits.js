function sumDgits(n){

    let result = 0;
    n = n.toString();

    for (let i = 0; i < n.length; i++) {
        result += Number(n.charAt(i));        
    }
    console.log(result);
    
}

sumDgits(245678);