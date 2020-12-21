function toyShop(holiday, puzzleNum, dollNum, teddyBearNum, minionNum, truckNum) {

    holiday = Number(holiday);
    puzzleNum = Number(puzzleNum);
    dollNum = Number(dollNum);
    teddyBearNum = Number(teddyBearNum);
    minionNum = Number(minionNum);
    truckNum = Number(truckNum);

    let puzzlePrice = puzzleNum * 2.60;
    let dollPrice = dollNum * 3;
    let teddyBearPrice = teddyBearNum * 4.10;
    let minionPrice = minionNum * 8.20;
    let truckPrice = truckNum * 2;

    let total = (puzzlePrice + dollPrice + teddyBearPrice + minionPrice + truckPrice) * 0.9;
    let all = puzzleNum + dollNum + teddyBearNum + minionNum + truckNum;

    if (all >= 50) {
        total = total * 0.75;
    }

    let moneyLeft = Math.abs(total - holiday);

    if (total >= holiday) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);

    } else {
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);

    }

}

toyShop("320", "8", "2", "5", "5", "1");