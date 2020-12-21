function emojiDetector([array]) {
    
    let sampleCool = /\d/g;
    let matchCool = array.match(sampleCool).map(Number);
    let threshold = matchCool.reduce((acc, c) => acc * c);
    let sample = /([:]{2}|[*]{2})(?<emo>[A-Z][a-z]{2,})\1/g;
    let matches = sample.exec(array);
    let counter = 0;
    let coolEmojies = [];

    while (matches != null) {
        counter++;
        let word = matches.groups.emo;
        let total = 0;

        for (const i in word) {
            total += word.charCodeAt(i);
        }

        if (total > threshold) coolEmojies.push(matches[0]);
        matches = sample.exec(array);
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    if (coolEmojies.length > 0) console.log(coolEmojies.join('\n'));    
}

emojiDetector(
    [
        `In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 
**Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 
different types of :Snak::Es::. ::Mooning:: **Shy**`
    ]
);
console.log(`------------------------------`);

emojiDetector(
    [
        `5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! 
::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::`
    ]
);
console.log(`------------------------------`);

emojiDetector(
    [
        `It is a long established fact that 1 a reader will be distracted by 9 the 
readable content of a page when looking at its layout. The point of using 
::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, 
as opposed to using 'Content here, content 99 here', 
making it look like readable **English**.`
    ]

);