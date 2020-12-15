function solve(input) {

    let index = 0;
    let lowScore = Number(input[index]);
    index++;
    let exam = input[index];
    let lastExam = "";
    let numExam = 0;
    let totalScore = 0;
    let fail = 0;

    while (exam !== "Enough") {
        let score = Number(input[index + 1]);
        totalScore += score;

        if (score <= 4) {
            fail++;
            if (fail === lowScore) {
                console.log(`You need a break, ${fail} poor grades.`);
                break;
            }
        }
        lastExam = exam;
        index += 2;
        exam = input[index];
        numExam++;
    }
    if (exam === "Enough") {
        console.log(`Average score: ${(totalScore / numExam).toFixed(2)}`);
        console.log(`Number of problems: ${numExam}`);
        console.log(`Last problem: ${lastExam}`);
    }

}

solve([
    "2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);
