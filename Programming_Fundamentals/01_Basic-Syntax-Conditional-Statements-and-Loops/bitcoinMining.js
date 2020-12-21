function bitcoinMining(input) {

    let bitcoin = 11949.16;
    let gold = 67.51;
    let bought = 0;
    let total = 0;
    let first = 0;
    let day = 0;
    let isFirst = true;

    for (let i = 0; i < input.length; i++) {
        let mined = input[i];
        mined *= gold;
        day++;

        if (day % 3 == 0){
            mined -= (mined * 30) / 100;
        }
        total += mined;

        while (total >= bitcoin){
            bought++;
            total -= bitcoin;

            if (isFirst){
                first = day;
                isFirst = false;
            }
        }        
    }
    console.log(`Bought bitcoins: ${bought}`);
    
    if (bought > 0){
        console.log(`Day of the first purchased bitcoin: ${first}`);        
    }
    console.log(`Left money: ${total.toFixed(2)} lv.`);
    
}

bitcoinMining([
    100, 
    200, 
    300
]);