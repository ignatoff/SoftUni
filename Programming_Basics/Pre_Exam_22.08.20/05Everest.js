function rate(input) {

    let index = 0;
    let rest = input[index];
    let days = 1;
    let start = 5364;
    let isFailed = true;

    while (rest !== "END") {
        
        if (rest === "Yes") {
            days++;
        }
        let climbed = Number(input[index + 1]);
        start += climbed;
        
        if (start >= 8848) {
            isFailed = false;
            console.log(`Goal reached for ${days} days!`);
            break;
        }
        
        if (days == 5) {
            console.log(`Failed!`);
            console.log(start);
            break;
        }        
        index += 2;
        rest = input[index];
    }

    if (isFailed && days < 5) {
        console.log(`Failed!`);
        console.log(start);
    }
}

rate([
    "Yes",
    "1000",
    "Yes",
    "945",
    "Yes",
    "1200",
    "END"
]);