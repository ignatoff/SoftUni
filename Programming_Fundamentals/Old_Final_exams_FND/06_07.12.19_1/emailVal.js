function emailVal(array) {
    
    let commands = {
        Make(email, upLo) {

            if (upLo == 'Upper') email = email.toUpperCase();
            else if (upLo == 'Lower') email = email.toLowerCase();
            console.log(email);
        
            return email;
        },
        GetDomain(email, count) {
        
            count = Number(count);
            let domain = email.slice(-count);
            console.log(domain);
                    
            return email;
        },
        GetUsername(email) {
        
            if (email.includes('@')) {
                let i = email.indexOf('@');
                let username = email.substring(0, i);
                console.log(username);
            }
            else console.log(`The email ${email} doesn't contain the @ symbol.`);
                    
            return email;
        },
        Replace(email, char) {
        
            while (email.includes(char)) email = email.replace(char, '-');
            console.log(email);
        
            return email;
        },
        Encrypt(email) {
            
            let result = [];
        
            for (const i in email) {
                let code = email.charCodeAt(i);
                result.push(code);
            }
            console.log(result.join(' ')); 
                    
            return email;   
        }
    }
    
    let email = array.shift();
    let line;
    
    while ((line = array.shift()) != 'Complete') {
        let [commName, arg] = line.split(' ');
        email = commands[commName](email, arg);
    }
}

emailVal(
    [
        'Mike123@somemail.com',
        'Make Upper',
        'GetDomain 3',
        'GetUsername',
        'Encrypt',
        'Complete'
    ]
);

console.log(`-----------------------`);

emailVal(
    [
        'AnotherMail.com',
        'Make Lower',
        'GetUsername',
        'Replace a',
        'Complete'
    ]
);