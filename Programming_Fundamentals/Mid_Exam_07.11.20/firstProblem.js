function nextLevel(array) {

    let neededExp = array.shift();
    let numOfBattles = array.shift();
    let earnedExp = 0;
    let counter = 0;
    let battle = array.shift();

    while (earnedExp < neededExp) {
        counter++;
        
        if (counter % 3 == 0) battle *= 1.15;
        
        if (counter % 5 == 0) battle *= 0.90;
        
        if (counter % 15 == 0) battle *= 1.05;
        
        earnedExp += battle;
        battle = array.shift();

        if (counter == numOfBattles) break;
    }

    if (earnedExp < neededExp) {
        console.log(`Player was not able to collect the needed experience, ${(neededExp - earnedExp).toFixed(2)} more needed.`);        
    } else {
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);        
    }
}

nextLevel(
    [400,
        5,
        50,
        100,
        200,
        100,
        20]
               
);