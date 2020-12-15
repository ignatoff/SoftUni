function clock(input) {

    let rec = "";
    
    for (let h = 0; h <= 23; h++) {

        for (let m = 0; m <= 59; m++){
            rec = h + " : " + m;
            console.log(rec);
        }
    }
}

clock();