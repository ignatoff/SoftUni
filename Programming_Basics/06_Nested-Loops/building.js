function solve(input) {

    let floor = Number(input[0]);
    let room = Number(input[1]);
    let rec = "";
    
    for (let f = floor; f >= 1; f--) {

        for (let r = 0; r < room; r++) {
            
            if (f === floor){
                rec += `L${f}${r} `;                
            } else if (f % 2 === 0){
                rec += `O${f}${r} `;
            } else {
                rec += `A${f}${r} `;
            }
        }
        console.log(rec);

    }

}

solve(["6", "1"]);