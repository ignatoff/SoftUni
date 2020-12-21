function phonebook(array) {

    let phonebook = {};

    for (const line of array) {
        let [name, phone] = line.split(' ');
        phonebook[name] = phone;
    }

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

phonebook(
    ['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']
);