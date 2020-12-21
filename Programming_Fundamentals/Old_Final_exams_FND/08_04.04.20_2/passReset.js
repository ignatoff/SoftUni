function passReset(array) {

    let pass = array.shift();
    let line = array.shift().split(' ');

    while (line != 'Done') {
        let command = line.shift();

        if (command == 'TakeOdd') {
            let raw = [];

            for (let i = 1; i < pass.length; i += 2) {
                raw.push(pass[i]);
            }
            pass = raw.join('');
            console.log(pass);
        } else if (command == 'Cut') {
            let index = Number(line[0]);
            let len = Number(line[1]);
            let cut = pass.slice(index, index + len);
            pass = pass.replace(cut, '');
            console.log(pass);
        } else if (command == 'Substitute') {
            let out = line[0];
            let sub = line[1];
            let i = pass.indexOf(out);
            let isFound = false;

            while (i > -1) {
                isFound = true;
                pass = pass.replace(out, sub);
                i = pass.indexOf(out, i + 1);
            }

            if (!isFound) console.log(`Nothing to replace!`);
            else console.log(pass);
        }
        line = array.shift().split(' ');
    }
    console.log(`Your password is: ${pass}`);
}



passReset(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
    ]
);
console.log(`---------------------------------------`);

passReset(
    [
        'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
        'TakeOdd',
        'Cut 18 2',
        'Substitute ! ***',
        'Substitute ? .!.',
        'Done'
    ]
);
