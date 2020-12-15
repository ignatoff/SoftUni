function flowerShop(magnolia, hyacinth, rose, cactus, gift) {

    magnolia = Number(magnolia) * 3.25;
    hyacinth = Number(hyacinth) * 4;
    rose = Number(rose) * 3.5;
    cactus = Number(cactus) * 8;
    gift = Number(gift);

    let all = magnolia + hyacinth + rose + cactus;
    let sum = all * 0.95;
    let final = Math.abs(sum - gift);

    if (sum < gift) {
        console.log(`She will have to borrow ${Math.ceil(final)} leva.`);

    } else {
        console.log(`She is left with ${Math.floor(final)} leva.`);

    }

}

flowerShop("15", "7", "5", "10", "100");