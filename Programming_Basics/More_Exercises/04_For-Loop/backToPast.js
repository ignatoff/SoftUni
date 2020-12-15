function backToPast(input) {

    let money = Number(input[0]);
    let year = Number(input[1]);

    let age = 18;
    let cost = 12000;
    let spended = 0;

    for (let i = 1800; i <= year; i++) {

        if (i % 2 === 0) {
            spended += cost;

            if (i != 1800) age++;
        } else {
            age++;
            spended += cost + (50 * age);
        }
    }
    let left = Math.abs(money - spended);

    if (money >= spended) console.log(`Yes! He will live a carefree life and will have ${left.toFixed(2)} dollars left.`);
    else console.log(`He will need ${left.toFixed(2)} dollars to survive.`);
}

backToPast(["100000.15", "1808"]);