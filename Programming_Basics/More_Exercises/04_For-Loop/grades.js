function grades(input) {

    let students = Number(input[0]);
    let top = 0;
    let veryGood = 0;
    let good = 0;
    let fail = 0;
    let average = 0;

    for (let i = 1; i <= students; i++) {
        let grade = Number(input[i]);
        average += grade;

        if (grade < 3) fail++;
        else if (grade < 4) good++;
        else if (grade < 5) veryGood++;
        else top++;
    }
    let sum = average / students;

    console.log(`Top students: ${((top / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((veryGood / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((good / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fail / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${sum.toFixed(2)}`);
}

grades([
    "6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"
]);