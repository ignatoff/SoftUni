function bikeRace(junior, senior, type) {

    junior = Number(junior);
    senior = Number(senior);

    let sumJ;
    let sumS;
    let total;
    let final;

    switch (type){
        case "trail": 
            sumJ = junior * 5.50; 
            sumS = senior * 7; 
            total = sumS + sumJ; 
            break;
        case "cross-country": 
            sumJ = junior * 8; 
            sumS = senior * 9.50; 
            total = sumS + sumJ;
            
            if ((junior + senior) >= 50){
                total *= 0.75
            } 
            break;
        case "downhill": 
            sumJ = junior * 12.25; 
            sumS = senior * 13.75; 
            total = sumS + sumJ; 
            break;
        case "road": 
            sumJ = junior * 20; 
            sumS = senior * 21.50; 
            total = sumS + sumJ; 
            break;
    }
    final = total * 0.95;

    console.log(`${final.toFixed(2)}`);    
}

bikeRace("30", "25", "cross-country");