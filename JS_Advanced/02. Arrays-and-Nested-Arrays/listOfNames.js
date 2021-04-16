function listOfNames(array) {
    
    let result = array.slice()
        .sort((a, b) => a.localeCompare(b))
        .map((name, i) => {
            return `${i + 1}.${name}`;
        });
    
        return result.join('\n');
}

/*
    array.sort((a, b) => a.localeCompare(b))
        .forEach((name, i) => {
            console.log(`${i + 1}.${name}`);
        });
        */

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));