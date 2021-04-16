function wordsUppercase(str) {
    
    const sample = /\w+/g;
    let match = sample.exec(str);
    let list = [];
    
    while (match) {
        list.push(match[0].toUpperCase());
        match = sample.exec(str);
    }

    return list.join(', ')
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));
