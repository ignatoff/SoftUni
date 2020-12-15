function forecast(degree) {

    degree = Number(degree);

    if (degree >= 5 && degree <= 11.9) {
        console.log("Cold");

    } else if (degree >= 12 && degree < 15) {
        console.log("Cool");

    } else if (degree >= 15 && degree <= 20) {
        console.log("Mild");

    } else if (degree >= 20.1 && degree < 26) {
        console.log("Warm");

    } else if (degree >= 26 && degree < 35) {
        console.log("Hot");

    } else {
        console.log("unknown");

    }

}

forecast("24");