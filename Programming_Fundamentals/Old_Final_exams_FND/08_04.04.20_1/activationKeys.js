function activationKeys(array) {

    let key = array.shift();
    let line = array.shift().split('>>>');

    while (line != 'Generate') {
        let command = line.shift();

        if (command == 'Contains') {
            let sub = line[0];

            if (key.includes(sub)) console.log(`${key} contains ${sub}`);
            else console.log(`Substring not found!`);

        } else if (command == 'Flip') {
            let lock = line[0];
            let start = line[1];
            let end = line[2];
            let cut = key.slice(start, end);

            if (lock == 'Upper') {
                let up = cut.toUpperCase();
                key = key.replace(cut, up);
            } else if (lock == 'Lower') {
                let low = cut.toLowerCase();
                key = key.replace(cut, low);
            }
            console.log(key);
        } else if (command == 'Slice') {
            let start = line[0];
            let end = line[1];
            let cut = key.slice(start, end);
            key = key.replace(cut, '');
            console.log(key);
        }
        line = array.shift().split('>>>');
    }
    console.log(`Your activation key is: ${key}`);
}

activationKeys(
    [
        'abcdefghijklmnopqrstuvwxyz',
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>def',
        'Contains>>>deF',
        'Generate'
    ]
);
console.log(`---------------------------------`);

activationKeys(
[
'134softsf5ftuni2020rockz42',
'Slice>>>3>>>7',
'Contains>>>-rock',
'Contains>>>-uni-',
'Contains>>>-rocks',
'Flip>>>Upper>>>2>>>8',
'Flip>>>Lower>>>5>>>11',
'Generate'
]
);
