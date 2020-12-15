function puppy(input) {

    let food = Number(input[0]) * 1000;
    let index = 1;
    let eaten = input[index];
    let sum = 0;
    let isEnough = true;
    let total = 0;
    let result = 0;

    while (eaten !== "Adopted") {
        sum = Number(eaten);
        result += sum;
        total = Math.abs(food - result);

        if (result > food) isEnough = false;
        
        index++;
        eaten = input[index];
    }

    if (isEnough) console.log(`Food is enough! Leftovers: ${total} grams.`);
    else console.log(`Food is not enough. You need ${total} grams more.`);
}

puppy([
    '2',
    '999',
    '456',
    '999',
    '999',
    '123',
    '456',
    'Adopted']);