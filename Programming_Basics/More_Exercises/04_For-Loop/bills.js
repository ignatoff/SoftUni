function bills(input) {

    let months = Number(input[0]);
    let water = 20;
    let internet = 15;
    let other = 0;
    let all = 0;
    let totalEl = 0;
       
    for (let i = 1; i <= months; i++){
        let electricity = Number(input[i]);
        totalEl += electricity;
        let different = 0;
        different = (water + internet + electricity) * 1.20;
        other += different;
        all += electricity + water + internet + different;
    }
    
    console.log(`Electricity: ${totalEl.toFixed(2)} lv`);
    console.log(`Water: ${(water * months).toFixed(2)} lv`);
    console.log(`Internet: ${(internet * months).toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${(all / months).toFixed(2)} lv`);    
}

bills([
    "5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"
]);