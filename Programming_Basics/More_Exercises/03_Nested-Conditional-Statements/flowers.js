function flowers(numCh, numRo, numTu, season, holiday) {

    numCh = Number(numCh);
    numRo = Number(numRo);
    numTu = Number(numTu);

    let chrysanthemums;
    let roses;
    let tulips;
    let bouquet;
    let count = numCh + numRo + numTu;

    if (season == "Spring" || season == "Summer") {
        chrysanthemums = numCh * 2;
        roses = numRo * 4.10;
        tulips = numTu * 2.50;
    } else if (season == "Autumn" || season == "Winter") {
        chrysanthemums = numCh * 3.75;
        roses = numRo * 4.50;
        tulips = numTu * 4.15;
    }
    bouquet = chrysanthemums + roses + tulips;

    if (holiday == "Y") bouquet *= 1.15;

    if (season == "Spring" && numTu > 7) bouquet *= 0.95;

    if (season == "Winter" && numRo > 9) bouquet *= 0.90;

    if (count > 20) bouquet *= 0.80;

    console.log((bouquet + 2).toFixed(2));
}


flowers("2", "4", "8", "Spring", "Y");