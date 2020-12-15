function seats(input) {

    let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphaCap = cap.split('');
    let reg = "abcdefghijklmnopqrstuvwxyz";
    let alphaReg = reg.split('');

    let lastSector = input[0];
    let rows = Number(input[1]);
    let oddSeats = Number(input[2]);
    let evenSeats = oddSeats + 2;
    let numLastSector = 25;
    let seats = 0;

    for (let i = 0; i < alphaCap.length; i++) {
        let sector = alphaCap[i];

        if (sector == lastSector) numLastSector = i;

        if (i > numLastSector) {
            break;
        } else {

            for (let j = 1; j <= rows; j++) {

                for (let k = 0; k < alphaReg.length; k++) {
                    let name = alphaReg[k];

                    if (j % 2 != 0) {

                        if (k < oddSeats) {
                            console.log(`${sector}${j}${name}`);
                            seats++;
                        } else {
                            break;
                        }
                    } else {

                        if (k < evenSeats) {
                            console.log(`${sector}${j}${name}`);
                            seats++;
                        } else {
                            break;
                        }
                    }
                }
            }
        }
        rows++;
    }
    console.log(seats);
}

seats([
    "C",
    "4",
    "2"
]);