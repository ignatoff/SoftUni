function translator(array) {
    
    let n = Number(array.shift());

    for (let i = 0; i < n; i++) {
        let info = array[i];
        let sample = /!(?<comm>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g;
        let match = sample.exec(info);

        if (match) {
            let comm = match.groups.comm;
            let message = match.groups.message;
            let encr = [];

            for (const j in message) {
                let result = message.charCodeAt(j);
                encr.push(result);
            }
            console.log(`${comm}: ${encr.join(' ')}`);            
        }
        else console.log(`The message is invalid`);        
    }
}

translator(
    [
        '2',
        '!Send!:[IvanisHere]',
        '*Time@:[Itis5amAlready]'
    ]
);

console.log(`---------------------`);

translator(
    [
        '3',
        'go:[outside]',
        '!drive!:YourCarToACarWash',
        '!Watch!:[LordofTheRings]'
    ]
);