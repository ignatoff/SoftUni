function registration(array) {
    
    let n = Number(array.shift());
    let counter = 0;

    for (let i = 0; i < n; i++) {
        let sample = /(U\$)(?<user>[A-Z][a-z]{2,})\1(P@\$)(?<pass>[A-Za-z]{5,}\d+)\3/g;
        let match = sample.exec(array[i]);
        
        if (match) {
            let user = match.groups.user;
            let pass = match.groups.pass;
            counter++;
            console.log(`Registration was successful`);
            console.log(`Username: ${user}, Password: ${pass}`);            
        }
        else console.log(`Invalid username or password`);        
    }
    console.log(`Successful registrations: ${counter}`);    
}

registration(
    [
        '3',
        'U$MichaelU$P@$asdqwe123P@$',
        'U$NameU$P@$PasswordP@$',
        'U$UserU$P@$ad2P@$'
    ]
);

console.log(`----------------------`);

registration(
    [
        '2',
        'U$TommyU$P@$asdqwe123P@$',
        'Sara 1232412'
    ]
);