function histogram(flow){
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let divide = Number(flow[0]);
    
    for (let i = 1; i < flow.length; i++){
        let num = Number(flow[i]);

        if (num < 200){
            p1++;
        } else if (num < 400){
            p2++;
        } else if (num < 600){
            p3++;
        } else if (num < 800){
            p4++;
        } else {
            p5++;
        }        
    }

    let sum1 = (p1 / divide) * 100;
    let sum2 = (p2 / divide) * 100;
    let sum3 = (p3 / divide) * 100;
    let sum4 = (p4 / divide) * 100;
    let sum5 = (p5 / divide) * 100;
        
    console.log(`${sum1.toFixed(2)}%`);
    console.log(`${sum2.toFixed(2)}%`);
    console.log(`${sum3.toFixed(2)}%`);
    console.log(`${sum4.toFixed(2)}%`);
    console.log(`${sum5.toFixed(2)}%`);
    
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
