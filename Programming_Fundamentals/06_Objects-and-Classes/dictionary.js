function dictionary(array) {

    let dict = {};

    array.forEach(el => {
        el = JSON.parse(el);
        let line = Object.entries(el);
        let term = line[0][0];
        let definition = line[0][1];
        dict[term] = definition;
    });

    Object.entries(dict)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => {
            console.log(`Term: ${x[0]} => Definition: ${x[1]}`);
        })
}

function dictionary(array) {

    let dict = {};

    array.forEach(term => {
        let obj = JSON.parse(term);
        let word = Object.keys(obj).join('');
        let defn = Object.values(obj).join('');
        dict[word] = defn;
    });
    
    Object.entries(dict)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => {
            console.log(`Term: ${x[0]} => Definition: ${x[1]}`);
        })    
}

dictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);