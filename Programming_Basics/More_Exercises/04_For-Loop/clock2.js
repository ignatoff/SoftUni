function clock2(input) {

    let rec = "";
    
    for (let h = 0; h <= 23; h++) {

        for (let m = 0; m <= 59; m++){
            
            for (let s = 0; s <= 59; s++){
                rec = h + " : " + m + " : " + s;
                console.log(rec);                
            }
        }
    }
}

clock2();