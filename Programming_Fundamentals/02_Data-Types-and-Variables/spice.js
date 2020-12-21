function spice(start) {

    let countDay = 0;
    let workers = 26;
    let mined = 0;

    for (let i = start; i >= 100; i -= 10) {
        countDay++;
        mined += i;
        mined -= workers;        
    }

    if (mined < workers){
        workers = mined;
    }
    mined -= workers;
    console.log(countDay);
    console.log(mined);    
}

spice(111);