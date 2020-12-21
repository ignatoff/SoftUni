function mapper(str) {
    
    let sample = /([=|/])(?<dest>[A-Z][A-Za-z]{2,})\1/g;
    let match = sample.exec(str);
    let dest = [];
    let points = 0;

    while (match) {
        dest.push(match.groups.dest);
        points += match.groups.dest.length;
        match = sample.exec(str);
    }
    console.log(`Destinations: ${dest.join(', ')}`);
    console.log(`Travel Points: ${points}`);    
}

mapper(
    '=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='
);

console.log(`-------------------`);

mapper(
    'ThisIs some InvalidInput'
);