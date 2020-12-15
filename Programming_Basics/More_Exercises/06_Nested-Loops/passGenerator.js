function passGenerator(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let maxPass = Number(input[2]);
    let ia = 35;
    let ib = 64;
    let a = String.fromCharCode(ia);
    let b = String.fromCharCode(ib);
    let rec = '';
    let counter = 1;

    for (let i = 1; i <= x; i++) {

        for (let j = 1; j <= y; j++) {

            if (counter > maxPass) break;

            rec += `${a}${b}${i}${j}${b}${a}|`;
            counter++;
            ia++;

            if (ia > 55) ia = 35;

            a = String.fromCharCode(ia);
            ib++;

            if (ib > 96) ib = 64;

            b = String.fromCharCode(ib);
        }

        if (counter > maxPass) break;
    }
    console.log(rec);
}

passGenerator([
    "20",
    "30",
    "10"
]);