function profit(input) {

    let one = Number(input[0]);
    let two = Number(input[1]);
    let five = Number(input[2]);
    let sum = Number(input[3]);
    let combo = 0;

    for (let i = 0; i <= one; i++) {     
        
        for (let j = 0; j <= two; j++) {       
            
            for (let k = 0; k <= five; k++) {  
                combo = (i * 1) + (j * 2) + (k * 5);

                if (combo == sum){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);                    
                }
            }
        }
    }
}

profit([
    "3",
    "2",
    "3",
    "10"
]);