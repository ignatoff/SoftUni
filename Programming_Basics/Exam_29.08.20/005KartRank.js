function kartRank(input) {

    let index = 0;
    let name = input[index];

    let gold = 0;
    let silver = 0;
    let bronze = 0;
    let fastM = 20;
    let fastS = 60;
    let fastN = "";

    while (name !== "Finish") {
        let minutes = Number(input[index + 1]);
        let seconds = Number(input[index + 2]);

        if (fastM >= minutes) {

            if (fastS > seconds || fastM > minutes) {
                fastS = seconds;
                fastN = name;
            }
            fastM = minutes;
        }

        if (minutes == 0 && seconds < 55) {
            gold++;
        } else if (minutes == 0 && seconds >= 55) {
            silver++;
        } else if (minutes == 1 && seconds <= 25) {
            silver++;
        } else if (minutes == 1 && seconds > 25) {
            bronze++;
        } else if (minutes == 2 && seconds == 0) {
            bronze++;
        }

        index += 3;
        name = input[index];
    }
    console.log(`With ${fastM} minutes and ${fastS} seconds ${fastN} is the winner of the day!`);
    console.log(`Today's prizes are ${gold} Gold ${silver} Silver and ${bronze} Bronze cards!`);
}

kartRank([
    'Nick',
    '3',
    '20',
    'Jack',
    '2',
    '45',
    'Sofia',
    '4',
    '10',
    'Viktor',
    '2',
    '52',
    'Finish'
]);