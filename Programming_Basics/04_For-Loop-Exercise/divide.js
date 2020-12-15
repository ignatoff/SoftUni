function divide(flow) {

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let divide = Number(flow[0]);

    for (let i = 1; i < flow.length; i++) {
        let num = Number(flow[i]);

        if (num % 2 === 0) {
            p1++;
        }

        if (num % 3 === 0) {
            p2++;
        }

        if (num % 4 === 0) {
            p3++;
        }
    }

    let sum1 = (p1 / divide) * 100;
    let sum2 = (p2 / divide) * 100;
    let sum3 = (p3 / divide) * 100;

    console.log(`${sum1.toFixed(2)}%`);
    console.log(`${sum2.toFixed(2)}%`);
    console.log(`${sum3.toFixed(2)}%`);
}

divide(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
