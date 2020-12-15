function solve(input) {

    let index = 0;
    let num = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < num) {
        sum += Number(input[index]);
        index++;
    }
    console.log(sum);

}

solve(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"]);