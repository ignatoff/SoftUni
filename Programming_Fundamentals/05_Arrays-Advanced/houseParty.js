function houseParty(array) {

    let goingArr = [];

    for (let i = 0; i < array.length; i++) {
        let action = array[i].split(' ');
        let name = action[0];

        if (!action.includes('not')) {

            if (goingArr.includes(name)) {
                console.log(`${name} is already in the list!`);                
            } else {
                goingArr.push(name);
            }
        } else {

            if (goingArr.includes(name)) {
                let remove = goingArr.indexOf(name);
                goingArr.splice(remove, 1);
            } else {
                console.log(`${name} is not in the list!`);                
            }
        }       
    } 
    console.log(goingArr.join('\n'));
       
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);
