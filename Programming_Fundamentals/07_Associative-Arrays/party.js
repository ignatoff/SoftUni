function party(array) {

    let guest = array.shift();
    let list = {
        VIP: [],
        regular: []
    }

    while (guest != 'PARTY') {

        if (isNaN(guest[0])) list.regular.push(guest);
        else list.VIP.push(guest);
        
        guest = array.shift();
    }

    for (const guest of array) {
        
        if (list.VIP.includes(guest)) {
            let i = list.VIP.indexOf(guest);
            list.VIP.splice(i, 1);
        } else if (list.regular.includes(guest)) {
            let i = list.regular.indexOf(guest);
            list.regular.splice(i, 1);
        }
    }
    let num = list.VIP.length + list.regular.length;
    console.log(num);
    
    for (const guest of Object.values(list)) {
        console.log(guest.join('\n'));        
    }
}

party(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
);