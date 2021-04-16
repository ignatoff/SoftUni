function playingCards(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) {
        throw new Error(`Error`);
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${validSuits[suit]}`;
        }
    }
}
const res = playingCards('A', 'S');
console.log(res.toString());
// console.log(playingCards('10', 'H'));
// console.log(playingCards('1', 'C'));
