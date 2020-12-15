function wedding(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let num = 0;
    let rec = '';

    for (let i = 1; i <= men; i++) {

        for (let j = 1; j <= women; j++) {
            num++;
            rec += `(${i} <-> ${j}) `;

            if (num == tables) break;
        }

        if (num == tables) break;
    }
    console.log(rec);
}

wedding([
    "2",
    "2",
    "6"
]);