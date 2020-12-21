function loadingBar(n) {
    
    let array = [];

    if (n == 100){
        return `100% Complete!\n[%%%%%%%%%%]`;
    } else {
        for (let i = 0; i < n / 10; i++) {
            array.push('%');        
        }
    
        for (let j = 0; j < 10 - (n / 10); j++) {
            array.push('.');        
        }
        return `${n}% [${array.join('')}]\nStill loading...`
    }
}

console.log(loadingBar(80));