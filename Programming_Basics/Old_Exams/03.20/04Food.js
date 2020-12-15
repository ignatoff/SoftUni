function food(input) {

    let days = input[0];
    let food = input[1];
    let countDays = 0;
    let biscuits = 0;
    let dogEaten = 0;
    let catEaten = 0;
    let totalFood = 0;

    for (let i = 2; i < input.length; i += 2) {
        let dogFood = Number(input[i]);
        let catFood = Number(input[i + 1]);
        let dailyFood = 0;

        dailyFood += dogFood + catFood;
        totalFood += dailyFood;
        dogEaten += dogFood;
        catEaten += catFood;
        countDays++;

        if (countDays % 3 === 0) biscuits += (dailyFood / 10);
    }
    console.log(`Total eaten biscuits: ${biscuits.toFixed(0)}gr.`);
    console.log(`${((totalFood / food) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogEaten / totalFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catEaten / totalFood) * 100).toFixed(2)}% eaten from the cat.`);
}

food([
    '3',
    '500',
    '100',
    '30',
    '110',
    '25',
    '120',
    '35'
]);