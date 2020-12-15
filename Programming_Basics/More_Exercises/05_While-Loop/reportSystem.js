function reportSystem(input) {

    let sum = Number(input[0]);
    let index = 1;
    let price = input[index];
    let collected = 0;
    let paidCash = 0;
    let paidCard = 0;
    let cash = 0;
    let card = 0;
    let isCollected = false;

    while (price !== "End") {
        price = Number(input[index]);

        if (index % 2 !== 0) {

            if (price > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                collected += price;
                paidCash += price;
                cash++;
            }
        } else {

            if (price < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                collected += price;
                paidCard += price;
                card++;
            }
        }

        if (collected >= sum) {
            isCollected = true;
            break;
        }

        index++;
        price = input[index];
    }

    if (isCollected) {
        console.log(`Average CS: ${(paidCash / cash).toFixed(2)}`);
        console.log(`Average CC: ${(paidCard / card).toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }
}

reportSystem([
    "500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317"
]);