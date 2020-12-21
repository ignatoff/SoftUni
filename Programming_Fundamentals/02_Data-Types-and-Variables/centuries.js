function centuries(n) {

    let year = 100 * n;
    let day = parseInt(year * 365.2422);
    let hour = day * 24;
    let minute = hour * 60;
    console.log(`${n} centuries = ${year} years = ${day} days = ${hour} hours = ${minute} minutes`);
    
}

centuries(5);