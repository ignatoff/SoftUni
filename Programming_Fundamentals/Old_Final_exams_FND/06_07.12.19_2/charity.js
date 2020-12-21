function firstProblem(array) {

    let commands = {
        Replace(message, old, fresh) {

            let i = 0;
        
            while ((i = message.indexOf(old)) > -1) message = message.replace(old, fresh);
            console.log(message);
        
            return message;
        },
        Cut(message, start, end) {
        
            [start, end] = [start, end].map(Number);

            if ((start >= 0 && start < message.length) && (end >= start && end < message.length)) {
                let left = message.substring(0, start);
                let right = message.substring(end + 1);
                message = left + right;
                console.log(message);
            }
            else console.log(`Invalid indexes!`);    
        
            return message;
        },
        Make(message, capslock) {
            
            if (capslock == 'Upper') message = message.toUpperCase();
            else if (capslock == 'Lower') message = message.toLowerCase();
            console.log(message);
        
            return message;
        },
        Check(message, str) {
            
            if (message.includes(str)) console.log(`Message contains ${str}`);
            else console.log(`Message doesn't contain ${str}`);
        
            return message;
        },
        Sum(message, start, end) {
            
            [start, end] = [start, end].map(Number);
        
            if ((start >= 0 && start < message.length) && (end >= start && end < message.length)) {
                let sub = message.substring(start, end + 1);
                let sum = 0;
        
                for (let i = 0; i < sub.length; i++) {
                    sum += sub.charCodeAt(i);
                }
            console.log(sum);
            }
            else console.log(`Invalid indexes!`);

            return message;
        }
    }

    let message = array.shift();
    let line;

    while ((line = array.shift()) != 'Finish') {
        let [commName, ...args] = line.split(' ');
        message = commands[commName](message, ...args);
    }
}

firstProblem(
    [
        'ILikeSharan',
        'Replace a e',
        'Make Upper',
        'Check SHEREN',
        'Sum 1 4',
        'Cut 1 4',
        'Finish',
    ]
);

console.log(`--------------------`);

firstProblem(
    [
        'HappyNameDay',
        'Replace p r',
        'Make Lower',
        'Cut 2 23',
        'Sum -2 2',
        'Finish'
    ]
);