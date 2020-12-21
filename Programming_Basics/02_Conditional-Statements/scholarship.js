function scholarship(income, score, minWage) {

    income = Number(income);
    score = Number(score);
    minWage = Number(minWage);

    let social = minWage * 0.35;
    let excellent = score * 25;

    if (income > minWage) {
        if (score < 5.50) {
            console.log(`You cannot get a scholarship!`);

        } else {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);

        }
    }

    if (income <= minWage) {
        if (score >= 4.50 && score < 5.50) {
            console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);

        } else if (score >= 5.50) {
            if (social > excellent) {
                console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);

            } else {
                console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);

            }
        } else {
            console.log(`You cannot get a scholarship!`);

        }
    }

}

scholarship("300.00", "5.65", "420.00");
