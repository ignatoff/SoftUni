function pianist(array) {

    let commands = {
        Add(list, pieceName, composer, key) {

            if (list.hasOwnProperty(pieceName)) {
                console.log(`${pieceName} is already in the collection!`);
            }
            else {
                list[pieceName] = { composer, key }
                console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
            }
        },
        Remove(list, pieceName) {

            if (list.hasOwnProperty(pieceName)) {
                console.log(`Successfully removed ${pieceName}!`);
                delete list[pieceName];
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        },
        ChangeKey(list, pieceName, newKey) {

            if (list.hasOwnProperty(pieceName)) {
                console.log(`Changed the key of ${pieceName} to ${newKey}!`);
                list[pieceName].key = newKey;
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }
    }

    let list = {};
    let num = Number(array.shift());
    let line;

    for (let i = 0; i < num; i++) {
        let [piece, composer, key] = array.shift().split('|');
        list[piece] = { composer, key };
    }

    while ((line = array.shift()) != 'Stop') {
        let [commandName, piece, ...args] = line.split('|');
        let command = commands[commandName];
        command(list, piece, ...args);
    }

    let sorted = Object.entries(list)
        .sort(compare)
        .forEach(([name, piece]) => {
            console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);            
        });

    function compare([nameA, pieceA], [nameB, pieceB]) {
        let compA = pieceA.composer;
        let compB = pieceB.composer;

        return nameA.localeCompare(nameB) || compA.localeCompare(compB);
    }
}

pianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
);

console.log(`----------------------`);

pianist(
    [
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
    ]
);