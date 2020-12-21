function wordsTracker(array) {

    let wanted = array[0].split(' ');
    array = array.slice(1);
    let words = {};

    for (const word of wanted) {
        words[word] = 0;
    }

    for (const word of array) {
        
        if (words.hasOwnProperty(word)) words[word]++;
    }
    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} - ${count}`);        
    }
}

wordsTracker(
    [
        'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 
        'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 
        'sentence', 'because', 'this', 'is', 'your', 'task'
    ]

);