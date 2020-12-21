function solve(input) {

    let index = 0;
    let data = input[index];

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (data !== "stop") {
        let num = Number(data);
        let lastDivider = num - 1;
        let isPrime = true;

        for (let divider = 2; divider <= lastDivider; divider++) {
            let result = num % divider;

            if (result === 0) {
                isPrime = false;
                nonPrimeSum += num;
                break;
            }
        }

        if (isPrime === true && num >= 0) {
            primeSum += num;
        }

        if (num < 0) {
            console.log(`Number is negative.`);
        }
        index++;
        data = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

solve([
    "3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
]);
