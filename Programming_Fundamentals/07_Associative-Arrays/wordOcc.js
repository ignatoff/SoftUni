function wordOcc(array) {
    
    let list = {};

    for (const word of array) {

        if (!list.hasOwnProperty(word)) {
            list[word] = 0;
        }
        list[word]++;
    }
    let sorted = Object.entries(list).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);        
    }    
}

wordOcc(
    ["Here", "is", "the", "first", "sentence", 
    "Here", "is", "another", "sentence", 
    "And", "finally", "the", "third", "sentence"]
);