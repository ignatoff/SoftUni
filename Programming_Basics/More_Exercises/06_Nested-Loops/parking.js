function parking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let total = 0;
    let tax = 0;

    for (let i = 1; i <= days; i++) {

        for (let j = 1; j <= hours; j++) {

            if (i % 2 != 0 && j % 2 == 0) tax += 1.25;
            else if (i % 2 != 0 && j % 2 != 0) tax += 1;

            if (i % 2 == 0 && j % 2 != 0) tax += 2.50;
            else if (i % 2 == 0 && j % 2 == 0) tax += 1;
        }
        total += tax;
        console.log(`Day: ${i} - ${tax.toFixed(2)} leva`);
        tax = 0;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

parking([
    "5",
    "2"
]);