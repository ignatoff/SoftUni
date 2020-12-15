function trekking(input) {

    let groups = input[0];
    index = 1;
    let total = 0;
    let musala = 0;
    let montblanc = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let people = Number(input[i]);
        total += people;

        if (people <= 5) musala += people;
        else if (people <= 12) montblanc += people;
        else if (people <= 25) kili += people;
        else if (people <= 40) k2 += people;
        else everest += people;
    }
    console.log(((musala / total) * 100).toFixed(2) + "%");
    console.log(((montblanc / total) * 100).toFixed(2) + "%");
    console.log(((kili / total) * 100).toFixed(2) + "%");
    console.log(((k2 / total) * 100).toFixed(2) + "%");
    console.log(((everest / total) * 100).toFixed(2) + "%");
}

trekking([
    '10',
    '10',
    '5',
    '1',
    '100',
    '12',
    '26',
    '17',
    '37',
    '40',
    '78'
]);