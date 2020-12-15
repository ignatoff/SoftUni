function solve(input) {

    let index = 0;
    let jury = Number(input[index]);
    index++;
    let exam = input[index];
    index++;
    let counterScore = 0;
    let final = 0;

    while (exam !== "Finish"){
        let score = Number(input[index]);
        let sum = 0;

        for (let i = 1; i <= jury; i++){            
            sum += score;
            counterScore++;
            index++;
            score = Number(input[index]);            
        }
        console.log(`${exam} - ${(sum / jury).toFixed(2)}.`);
        final += sum;
        exam = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(final / counterScore).toFixed(2)}.`);
    

}

solve([
    "3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]);
