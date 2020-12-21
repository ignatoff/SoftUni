function tradeCommissions(city, sales) {

    sales = Number(sales);
    let sum;

    if (sales < 0) {
        console.log("error");

    } else if (sales <= 500) {

        switch (city) {
            case "Sofia": sum = sales * 0.05;
                console.log(sum.toFixed(2)); break;
            case "Varna": sum = sales * 0.045;
                console.log(sum.toFixed(2)); break;
            case "Plovdiv": sum = sales * 0.055;
                console.log(sum.toFixed(2)); break;
            default: console.log("error");
        }
    } else if (sales > 10000) {

        switch (city) {
            case "Sofia": sum = sales * 0.12;
                console.log(sum.toFixed(2)); break;
            case "Varna": sum = sales * 0.13;
                console.log(sum.toFixed(2)); break;
            case "Plovdiv": sum = sales * 0.145;
                console.log(sum.toFixed(2)); break;
            default: console.log("error");
        }
    } else if (sales <= 1000) {

        switch (city) {
            case "Sofia": sum = sales * 0.07;
                console.log(sum.toFixed(2)); break;
            case "Varna": sum = sales * 0.075;
                console.log(sum.toFixed(2)); break;
            case "Plovdiv": sum = sales * 0.08;
                console.log(sum.toFixed(2)); break;
            default: console.log("error");
        }
    } else if (sales <= 10000) {

        switch (city) {
            case "Sofia": sum = sales * 0.08;
                console.log(sum.toFixed(2)); break;
            case "Varna": sum = sales * 0.10;
                console.log(sum.toFixed(2)); break;
            case "Plovdiv": sum = sales * 0.12;
                console.log(sum.toFixed(2)); break;
            default: console.log("error");
        }
    }
}

tradeCommissions("Plovdiv", "499.99")