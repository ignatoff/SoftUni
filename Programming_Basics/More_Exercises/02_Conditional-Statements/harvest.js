function harvest(area, grape, neededLiters, workers) {

    area = Number(area);
    grape = Number(grape);
    neededLiters = Number(neededLiters);
    workers = Number(workers);

    let produce = area * 0.4;
    let kgGrape = produce * grape;
    let liters = kgGrape / 2.5;
    let leftWine = Math.abs(liters - neededLiters);

    if (liters < neededLiters) {
        console.log(`It will be a tough winter! More ${Math.floor(leftWine)} liters wine needed.`);

    } else {
        let perPerson = Math.ceil(leftWine / workers);
        console.log(`Good harvest this year! Total wine: ${Math.floor(liters)} liters.`);
        console.log(`${Math.ceil(leftWine)} liters left -> ${Math.ceil(perPerson)} liters per person.`);

    }

}

harvest("1020", "1.5", "425", "4");