function fishland(mackerel, sprat, bonito, scad, mussels) {

    mackerel = Number(mackerel);
    sprat = Number(sprat);
    bonito = Number(bonito);
    scad = Number(scad);
    mussels = Number(mussels) * 7.5;

    let priceBonito = mackerel * 1.6;
    let priceScad = sprat * 1.8;
    let allBonito = bonito * priceBonito;
    let allScad = scad * priceScad;

    let sum = allBonito + allScad + mussels;

    console.log(sum.toFixed(2));

}

fishland("6.90", "4.20", "1.5", "2.5", "1");