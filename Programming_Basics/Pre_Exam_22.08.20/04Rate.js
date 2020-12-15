function rate(sum, months) {

    sum = Number(sum);
    months = Number(months);

    let simpleSum = sum;
    let complexSum = sum;

    for (let i = 1; i <= months; i++) {
        simpleSum += sum * 0.03;
        complexSum *= 1.027;
    }
    let final = Math.abs(complexSum - simpleSum);

    console.log(`Simple interest rate: ${simpleSum.toFixed(2)} lv.`);
    console.log(`Complex interest rate: ${complexSum.toFixed(2)} lv.`);

    if (complexSum > simpleSum) {
        console.log(`Choose a complex interest rate. You will win ${final.toFixed(2)} lv.`);

    } else {
        console.log(`Choose a simple interest rate. You will win ${final.toFixed(2)} lv.`);
    }
}

rate(
    "500",
    "6"
);