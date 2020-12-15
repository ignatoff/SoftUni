function solve(input) {

    let num = Number(input[0]);
    let lineNum = "";
    
    for (let n = 1111; n <= 9999; n++){
        let rec = "" + n;
        let isSpecial = true;

        for (let i = 0; i < rec.length;){
            let index = Number(rec[i]);
            
            if (num % index === 0){
                i++;                
            } else {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial === true){
            lineNum += n + " ";
        }
    }
    console.log(lineNum);
}

solve(["11"]);