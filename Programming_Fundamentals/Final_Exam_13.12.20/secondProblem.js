function secondProblem(array) {

    let num = Number(array.shift());

    for (let i = 0; i < num; i++) {
        let input = array.shift();
        let sample = /(\S+)>(?<digits>\d{3})\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<symbols>[^<>]{3})<\1/g;
        let match = sample.exec(input);
        let valid = [];

        if (match) {
            let digits = match.groups.digits;
            let lower = match.groups.lower;
            let upper = match.groups.upper;
            let symbols = match.groups.symbols;
            valid.push(digits, lower, upper, symbols);
            console.log(`Password: ${valid.join('')}`);            
        }
        else console.log(`Try another password!`);        
    }
}

secondProblem(
    [
        '3',
        '##>00|no|NO|!!!?<###',
        '##>123|yes|YES|!!!<##',
        '$$<111|noo|NOPE|<<>$$'
    ]
);

console.log(`-------------------------`);

secondProblem(
    [
        '5',
        'aa>111|mqu|BAU|mqu<aa',
        '()>111!aaa!AAA!^&*<()',
        'o>088|abc|AAA|***<o',
        'asd>asd|asd|ASD|asd<asd',
        '*>088|zzzz|ZzZ|123<*'
    ]
);