function market(priceVegie, priceFruit, vegieKg, friutKg) {

    priceVegie = Number(priceVegie);
    priceFruit = Number(priceFruit);
    vegieKg = Number(vegieKg);
    friutKg = Number(friutKg);

    let sumVegie = priceVegie * vegieKg;
    let sumFruit = priceFruit * friutKg;
    let result = (sumFruit + sumVegie) / 1.94;

    console.log(result.toFixed(2));


}

market("1.5", "2.5", "10", "10");