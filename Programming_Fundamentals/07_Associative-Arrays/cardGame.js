function cardGame(array) {

    let players = {};
    let scores = {};
    let cardType = { S: 4, H: 3, D: 2, C: 1, };
    let cardPower = { J: 11, Q: 12, K: 13, A: 14, };

    for (const line of array) {
        let [name, hands] = line.split(': ');
        hands = hands.split(', ');
        if (!players.hasOwnProperty(name)) players[name] = [];

        for (const card of hands) {            
            if (!players[name].includes(card)) players[name].push(card);
        }
    }

    for (const key in players) {
        let score = 0;
        
        for (const card of players[key]) {
            let type = card.slice(-1);
            let power = card.split(type).join('');

            for (const key in cardType) {                    
                if (key === type) type = cardType[key];
            }
            if (isNaN(power)) {

                for (const key in cardPower) {                    
                    if (key === power) power = cardPower[key];
                }
            }
            power = Number(power);
            score += type * power;
        }
        scores[key] = score;
    }
    for (const [name, score] of Object.entries(scores)) {
        console.log(`${name}: ${score}`);        
    }
}

cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]

);