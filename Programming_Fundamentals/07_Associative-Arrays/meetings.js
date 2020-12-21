function meetings(array) {

    let schedule = {};

    for (const line of array) {
        let [day, name] = line.split(' ');

        if (schedule[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);            
        }
    }
    for (const kvp of Object.entries(schedule)) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

meetings(
    ['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim']
);