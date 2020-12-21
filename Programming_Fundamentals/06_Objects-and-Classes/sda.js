function solve(array) {

    let contacts = {};

    for (const line of array) {
        let [name, phone] = line.split(' ');
        contacts[name] = phone;
    }
    delete contacts['Kiki'];
    console.log(contacts);
    
}

solve(
    [
        'Kiki 651515',
        'Sonny 7254204',
        'Kiki 999',
        'Doyle 4524241'
    ]
);