function celsiusToFahrenheit(degC) {

    degC = Number(degC);
    let degF = degC * 1.8 + 32;

    console.log(degF.toFixed(2))
}

celsiusToFahrenheit("32.3")