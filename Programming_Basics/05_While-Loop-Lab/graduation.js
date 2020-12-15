function solve(input) {

    let index = 0;
    let name = input[index];
    index++;
    let grade = 1;
    let total = 0;
    let fail = 0;

    while (grade <= 12) {
        let score = Number(input[index]);
        index++;
        total += score;

        if (score < 4) {
            fail++;
            if (fail === 2) {
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
            continue;
        }
        grade++;

    }
    if (grade > 12) {
        console.log(`${name} graduated. Average grade: ${(total / 12).toFixed(2)}`);

    }

}

solve(["Mimi", "5", "6", "5", "6", "5", "6", "5", "6", "5", "6", "6", "6", "6", "2", "3"]);
