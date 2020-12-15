function hospital(input) {

    let period = Number(input[0]);
    let doctors = 7;
    let treated = 0;
    let untreated = 0;
    let days = 1;

    for (let i = 1; i <= period; i++) {
        let patients = Number(input[i]);
        let difference = 0;
        difference = doctors - patients;
        days++;

        if (difference < 0) {
            difference = Math.abs(difference);
            untreated += difference;
            treated += doctors;
        } else if (difference == 0) {
            treated += doctors;
        } else {
            treated += patients;
        }

        if (days % 3 === 0 && treated < untreated) doctors++;
    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}

hospital([
    "6",
    "25",
    "25",
    "25",
    "25",
    "25",
    "2"
]);