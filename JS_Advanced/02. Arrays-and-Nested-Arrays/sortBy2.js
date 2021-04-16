function sortBy2(array) {

    return array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

console.log(sortBy2(['alpha', 'beta', 'gamma']));
console.log(sortBy2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortBy2(['test', 'Deny', 'omen', 'Default']));
