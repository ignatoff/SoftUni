function passValidator(password) {
    
    
    function lengthCheck(password) {
        return password.length >= 6 && password.length <= 10 ? true : "Password must be between 6 and 10 characters";        
    }
    
    function symbolCheck(password) {
        let regexpSymbol = /[^A-Za-z0-9]/;
        return password.match(regexpSymbol) ? "Password must consist only of letters and digits" : true;        
    }
    
    function twoDigitsCheck(password) {
        let digitCounter = 0;
        
        for (let i = 0; i < password.length; i++) {
            let element = password[i].charCodeAt();
            
            if (element >= 48 && element <= 57) {
                digitCounter++;
            }
        }
        return digitCounter >= 2 ? true : "Password must have at least 2 digits";
    }
    let array = [];

    function isValid() {
        
        if (lengthCheck(password) !== true){
            array.push(lengthCheck(password));
        }
        if (symbolCheck(password) !== true){
            array.push(symbolCheck(password));
        }
        if (twoDigitsCheck(password) !== true){
            array.push(twoDigitsCheck(password));
        }
        if (lengthCheck(password) === true && symbolCheck(password) === true && twoDigitsCheck(password) === true){
            array.push("Password is valid");
        }
        return array.join('\n');
    }

    return isValid(password);
    
}

console.log(passValidator('vbv'));
