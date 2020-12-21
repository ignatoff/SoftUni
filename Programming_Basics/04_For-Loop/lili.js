function lili(age, washingPrice, toyPrice) {

    age = Number(age);
    washingPrice = Number(washingPrice);
    toyPrice = Number(toyPrice);

    let money = 0;
    let toyCount = 0;
    let cashGift = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCount += 1;
        } else {
            money += cashGift + 9;
            cashGift += 10;
        }
    }
    money += toyPrice * toyCount;

    let final = Math.abs(money - washingPrice);

    if (money >= washingPrice) {
        console.log(`Yes! ${final.toFixed(2)}`);

    } else {
        console.log(`No! ${final.toFixed(2)}`);

    }

}

lili("10", "170", "6");