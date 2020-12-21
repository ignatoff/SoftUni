function productList(array) {

    let sorted = array.sort();
    let listed = [];

    for (let i = 0; i < array.length; i++) {
        let numbered = `${i + 1}.`;
        listed.push(`${numbered}${sorted[i]}`);
        
    }
    console.log(listed.join('\n'));
}

productList([
    "Potatoes",
    "Tomatoes",
    "Onions",
    "Apples"
]);