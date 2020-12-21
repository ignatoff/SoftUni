function neighborhoods(array) {

    let list = array.shift().split(', ');
    let hoods = {};

    for (const address of list) {
        hoods[address] = [];
    }

    for (const line of array) {
        let [street, name] = line.split(' - ');

        if (hoods.hasOwnProperty(street)) hoods[street].push(name);
    }
    let sorted = Object.entries(hoods).sort(sorting);
    
    for (const [address, names] of sorted) {
        console.log(`${address}: ${names.length}`);

        if (names.length > 0) {

            for (const name of names) {
                console.log(`--${name}`);                
            }            
        }        
    }

    function sorting(a, b) {
        let max = b[1].length;
        let min = a[1].length;
        return max - min;
    }    
}

neighborhoods(
    ['Abbey Street, Herald Street, Bright Mews',
        'Bright Mews - Garry',
        'Bright Mews - Andrea',
        'Invalid Street - Tommy',
        'Abbey Street - Billy']
);