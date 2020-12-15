function intervals(input) {

    let moves = Number(input[0]);
    let score = 0;
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    let invalid = 0;

    for (let i = 1; i <= moves; i++) {
        let interval = Number(input[i]);

        if (interval < 0 || interval > 50){
            invalid++;
            score = score / 2;
        } else if (interval >= 40){
            fifth++;
            score += 100;
        } else if (interval >= 30){
            fourth++;
            score += 50;
        } else if (interval >= 20){
            third++;
            score += interval * 0.40;
        } else if (interval >= 10){
            second++;
            score += interval * 0.30;
        } else if (interval >= 0){
            first++;
            score += interval * 0.20;
        } 
    }
    
    console.log(score.toFixed(2));
    console.log(`From 0 to 9: ${((first / moves) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((second / moves) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((third / moves) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((fourth / moves) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((fifth / moves) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalid / moves) * 100).toFixed(2)}%`);
}

intervals([
    "10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"
]);