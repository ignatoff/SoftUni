function worldTour(array) {
    
    let stops = array.shift();
    let line;

    while ((line = array.shift()) != 'Travel') {
        let [command, ...args] = line.split(':');

        if (command == 'Add Stop') {
            let [i, str] = [...args];
            i = Number(i);

            if (i >= 0 && i < stops.length) {
                let left = stops.substring(0, i);
                let right = stops.substring(i);
                stops = left + str + right;
            }
        } else if (command == 'Remove Stop') {
            let [start, end] = [...args].map(Number);

            if ((start >= 0 && start < stops.length) && (end >= 0 && end < stops.length)) {
                let left = stops.substring(0, start);
                let right = stops.substring(end + 1);
                stops = left + right;
            }
        } else if (command == 'Switch') {
            let [old, fresh] = [...args];

            if (stops.includes(old)) {
                let i = stops.indexOf(old);
                let left = stops.substring(0, i);
                let right = stops.substring(i + old.length);
                stops = left + fresh + right;
            }
        }
        console.log(stops);                
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);    
}

worldTour(
    [
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ]
);