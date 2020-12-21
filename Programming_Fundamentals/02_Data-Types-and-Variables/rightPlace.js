function rightPlace(word, char, template) {

    let change = word.replace('_', char);

    if (change == template) {
        console.log(`Matched`);

    } else {
        console.log(`Not Matched`);

    }
}

rightPlace('Str_ng', 'I', 'Strong');