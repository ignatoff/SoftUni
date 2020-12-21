function imitation(arr) {

    let commands = {
        Move(message, num) {
            num = Number(num);
            let left = message.substring(0, num);
            let right = message.substring(num);
            message = right + left;

            return message;
        },
        Insert(message, i, value) {
            i = Number(i);
            let left = message.substring(0, i);
            let right = message.substring(i);
            message = left + value + right;

            return message;
        },
        ChangeAll(message, sub, repl) {

            while (message.includes(sub)) {
                let i = message.indexOf(sub);
                let left = message.substring(0, i);
                let right = message.substring(i + sub.length);
                message = left + repl + right;
            }

            return message;
        }
    }

    let message = arr.shift();
    let line;

    while ((line = arr.shift()) != 'Decode') {
        let [commandName, ...args] = line.split('|');
        message = commands[commandName](message, ...args);
    }
    console.log(`The decrypted message is: ${message}`);    
}

imitation(
    [
        'zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode'
    ]
);

console.log(`=-----------------`);

imitation(
    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode'
    ]
);