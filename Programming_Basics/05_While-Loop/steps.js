function solve(input) {

    let index = 0;
    let steps = input[index];
    let target = 10000;
    let walked = 0;

    while (walked < target) {

        if (steps === "Going home") {
            index++;
            steps = Number(input[index]);
            walked += steps;

            if (walked >= target) {
                console.log(`Goal reached! Good job!`);
                console.log(`${walked - target} steps over the goal!`);
                break;
            } else {
                console.log(`${target - walked} more steps to reach goal.`);
                break;
            }
        }
        steps = Number(input[index]);
        walked += steps;
        index++;
        steps = input[index];
    }
    index -= 1;
    steps = input[index];

    if (steps !== "Going home") {
        console.log(`Goal reached! Good job!`);
        console.log(`${walked - target} steps over the goal!`);
    }
}

solve(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"]);
