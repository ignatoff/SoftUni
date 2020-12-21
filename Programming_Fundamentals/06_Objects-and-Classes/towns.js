function towns(array) {

    for (const info of array) {
        let [town, latitude, longitude] = info.split(' | ');
        let myTown = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(myTown);        
    }
}

towns(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);