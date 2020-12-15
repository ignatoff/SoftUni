function gameShop(input) {

    let games = Number(input[0]);
    let countH = 0;
    let countF = 0;
    let countO = 0;
    let countX = 0;
    let isZero = false;

    for (let i = 1; i < input.length; i++) {
        let name = input[i];

        switch (name){
            case "Hearthstone": countH++;
                break;
            case "Fornite": countF++;
                break;
            case "Overwatch": countO++;
                break;
            default : countX++;
                break;
        }
    }
    let soldF = (countH / games) * 100;
    let soldH = (countF / games) * 100;
    let soldO = (countO / games) * 100;
    let soldX = (countX / games) * 100;

    console.log(`Hearthstone - ${soldF.toFixed(2)}%`);
    console.log(`Fornite - ${soldH.toFixed(2)}%`);
    console.log(`Overwatch - ${soldO.toFixed(2)}%`);
    console.log(`Others - ${soldX.toFixed(2)}%`);    
}

gameShop([
    "4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"
]);