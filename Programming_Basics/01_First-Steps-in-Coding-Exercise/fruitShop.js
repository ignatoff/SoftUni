function fruitShop(pricePerKg, bananna, orange, raspberry, strawberry) {

    pricePerKg = Number(pricePerKg);
    bananna = Number(bananna);
    orange = Number(orange);
    raspberry = Number(raspberry);
    strawberry = Number(strawberry);

    let strawberryPrice = pricePerKg * strawberry;
    let raspberryPerKg = pricePerKg / 2;
    let raspberryPrice = raspberryPerKg * raspberry;
    let orangePrice = (raspberryPerKg * 0.6) * orange;
    let banannaPrice = (raspberryPerKg * 0.2) * bananna;

    let result = strawberryPrice + raspberryPrice + orangePrice + banannaPrice;

    console.log(result);

}

fruitShop("63.5", "3.57", "6.35", "8.15", "2.5");
