function pcStore(processor, videoCard, ram, numRam, discount) {

    processor = Number(processor);
    videoCard = Number(videoCard);
    ram = Number(ram);
    numRam = Number(numRam);
    discount = Number(discount);

    let afterDiscount = (processor + videoCard) * Math.abs(discount - 1);
    let sumLeva = (afterDiscount + (ram * numRam)) * 1.57;

    console.log(`Money needed - ${sumLeva.toFixed(2)} leva.`);
}

pcStore(
    "200",
    "100",
    "80",
    "1",
    "0.01"
);