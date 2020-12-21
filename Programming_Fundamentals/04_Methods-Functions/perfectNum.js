function perfectNum(n) {

    function modularDivision(n) {
        
        let sum = 0;
        
        for (let i = 1; i < n; i++) {
            let divider = i;
            
            if (n % divider == 0) {
                sum += divider;
            }
        }
        return sum;
    }

    function checkEquality(n) {
        
        return n === modularDivision(n) ? "We have a perfect number!" : "It's not so perfect.";
    }
    
    return checkEquality(n);

}

console.log(perfectNum(6));
