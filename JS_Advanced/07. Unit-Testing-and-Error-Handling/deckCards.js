function printDeckOfCards(cards) {
    let face;
    let suit;
    const result = [];

    function createCard() {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) {
            // throw new Error(`Invalid card: ${face}${suit}`);
            return `Invalid card: ${face}${suit}`;
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${validSuits[suit]}`;
            }
        }
    }

    cards.forEach(card => {
        face = card.slice(0, card.length - 1);
        suit = card.slice(-1);
        const getCard = createCard(face, suit);
        result.push(getCard.toString());
    });

    const filtered = result.filter(c => c.length > 3);

    if (filtered.length > 0) {
        console.log(filtered.join());
    } else {
        console.log(result.join(' '));
    }    
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);