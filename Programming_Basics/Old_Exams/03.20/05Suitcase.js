function suitcase(input) {

    let capacity = Number(input[0]);
    let index = 1;
    let suitcase = input[index];
    let loaded = 0;
    let num = 0;
    let isFull = false;

    while (suitcase !== "End") {
        num = Number(suitcase);
        loaded++;

        if (loaded % 3 === 0) num *= 1.10;

        if (num > capacity) {
            isFull = true;
            console.log(`No more space!`);
            break;
        }
        capacity -= num;
        index++;
        suitcase = input[index];
    }

    if (suitcase !== "End") loaded--;

    if (isFull === false) console.log(`Congratulations! All suitcases are loaded!`);

    console.log(`Statistic: ${loaded} suitcases loaded.`);
}

suitcase(['700', '180', '340', '126', 'End']);