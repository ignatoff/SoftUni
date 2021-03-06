function secretChat(array) {

    let commands = {
        InsertSpace(message, index) {

            index = Number(index);
            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + ' ' + right;
            console.log(message);    
            return message;
        },
        Reverse(message, cut) {
            
            if (message.includes(cut)) {
                let i = message.indexOf(cut);
                let sub = cut.split('').reverse().join('');
                let left = message.substring(0, i);
                let right = message.substring(i + cut.length);
                message = left + right + sub;
                console.log(message);        
            } else {
                console.log(`error`);        
            }
            return message;
        },
        ChangeAll(message, sub, repl) {
            
            let i = message.indexOf(sub);
        
            while (i > -1) {
                message = message.replace(sub, repl);
                i = message.indexOf(sub, i + 1);
            }
            console.log(message);
            return message;
        }
    }

    let message = array.shift();
    let line;

    while ((line = array.shift()) != 'Reveal') {
        let [commandName, ...params] = line.split(':|:');
        message = commands[commandName](message, ...params);        
    }
    console.log(`You have a new text message: ${message}`);    
}

secretChat(
    [
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ]
);

console.log(`--------------------`);

secretChat(
    [
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ]
);