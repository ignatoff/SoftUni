function repainting(nylon, paint, thinner, hours) {

    nylon = Number(nylon);
    paint = Number(paint);
    thinner = Number(thinner);
    hours = Number(hours);

    let sumNylon = (nylon + 2) * 1.50;
    let sumPaint = (paint * 1.10) * 14.50;
    let sumThinner = thinner * 5.00;
    let bags = 0.40;
    let result = sumNylon + sumPaint + sumThinner + bags;
    let work = (result * 0.30) * hours;

    let total = result + work;

    console.log(`Total expenses: ${total.toFixed(2)} lv.`);    
}

repainting(
    "10",
    "11",
    "4",
    "8"
);