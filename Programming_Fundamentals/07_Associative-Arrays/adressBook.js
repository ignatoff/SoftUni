function adressBook(array) {
    
    let adress = {};

    for (const line of array) {
        let [name, street] = line.split(':');
        adress[name] = street;
    }
    let sorted = Object.entries(adress).sort((a, b) => a[0].localeCompare(b[0]));
    
    sorted.forEach(line => console.log(`${line[0]} -> ${line[1]}`));
}

adressBook(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   
);