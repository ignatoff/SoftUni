function login(input) {

    let username = input[0];
    let counter = 0;

    for (let i = 1; i < input.length; i++) {
        let pass = input[i];
        pass = pass.split("").reverse().join("");

        if (username == pass){
            console.log(`User ${username} logged in.`);
            
        } else {
            counter++;

            if (counter > 3){
                console.log(`User ${username} blocked!`);
                break;                
            }
            console.log(`Incorrect password. Try again.`);
            
        }
    }    
}

login([
    'Acer',
    'login',
    'go',
    'let me in',
    'recA'
]);