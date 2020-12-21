function mirrorWords([array]) {

    let sample = /([@|#])(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
    let match;
    let mirror = [];
    let counter = 0;

    let result = '';
    while ((match = sample.exec(array)) != null) {
        counter++;
        let reversed = match.groups.second.split('').reverse().join('');

        if (match.groups.first == reversed) mirror.push(`${match.groups.first} <=> ${match.groups.second}`);
    }

    if (counter == 0) console.log(`No word pairs found!`);
    else console.log(`${counter} word pairs found!`);

    if (mirror.length == 0) console.log(`No mirror words!`);
    else console.log(`The mirror words are:\n${mirror.join(', ')}`);
}

mirrorWords(
    [
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
);

console.log(`-------------------------`);

mirrorWords(
    ['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']
);

console.log(`-------------------------`);

mirrorWords(
    ['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']
);