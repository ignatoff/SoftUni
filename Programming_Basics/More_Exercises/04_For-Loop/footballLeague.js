function footballLeague(input) {

    let capacity = Number(input[0]);
    let numFans = Number(input[1]);
    let A = 0;
    let B = 0;
    let V = 0;
    let G = 0;
    let percent = (numFans / capacity) * 100;

    for (let i = 2; i < input.length; i++) {
        let interval = input[i];

        if (interval == "A") A++;
        else if (interval == "B") B++;
        else if (interval == "V") V++;
        else if (interval == "G") G++;
    }

    console.log(`${((A / numFans) * 100).toFixed(2)}%`);
    console.log(`${((B / numFans) * 100).toFixed(2)}%`);
    console.log(`${((V / numFans) * 100).toFixed(2)}%`);
    console.log(`${((G / numFans) * 100).toFixed(2)}%`);
    console.log(`${percent.toFixed(2)}%`);
}

footballLeague([
    "76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"
]);