function solve(input) {

    let index = 0;
    let destination = input[index];
    index++;
    let budget = Number(input[index]);
    index++;
    let sum = 0;

    while (destination !== "End") {
        let money = Number(input[index]);

        while (sum < budget) {
            money = Number(input[index]);
            sum += money;
            index++;
        }
        console.log(`Going to ${destination}!`);
        sum = 0;
        destination = input[index];
        index++;
        budget = Number(input[index]);
        index++;
    }

}

solve([
    "France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
    ;