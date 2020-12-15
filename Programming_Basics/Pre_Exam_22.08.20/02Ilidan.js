function ilidan(people, power, blood) {

    people = Number(people);
    power = Number(power);
    blood = Number(blood);

    let allPower = people * power;
    let result = Math.abs(allPower - blood);

    if (allPower >= blood) {
        console.log(`Illidan has been slain! You defeated him with ${result} points.`);
    } else {
        console.log(`You are not prepared! You need ${result} more points.`);
    }
}

ilidan(
    "15",
    "60",
    "1500"
);