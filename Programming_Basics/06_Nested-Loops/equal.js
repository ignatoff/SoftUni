function solve(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let num = 0;
    let sumEven = 0;
    let sumOdd = 0;
    let lineNum = "";

    for (let n = start; n <= end; n++) {
        let rec = "" + n;
        
        for (let i = 0; i < rec.length; i++){
            let index = Number(rec[i]);
            if (i % 2 === 0){
                sumEven += index;
            } else {
                sumOdd += index;
            }
        }
        if (sumOdd === sumEven){
            lineNum += rec + " ";                        
        }
        sumEven = 0;
        sumOdd = 0;
    }
    console.log(lineNum);            

}

solve(["123456",
"124000"])

;
