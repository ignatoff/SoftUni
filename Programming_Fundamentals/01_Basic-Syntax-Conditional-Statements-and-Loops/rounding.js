function rounding(n, precision) {

    if (precision > 15) {
        precision = 15;
    }
    n = n.toFixed(precision);
    console.log(parseFloat(n));    

}

rounding(3.1, 5);