function sleepyTomCat(rest) {

    rest = Number(rest);

    let work = 365 - rest;
    let workHours = work * 63;
    let restHours = rest * 127;
    let playTime = workHours + restHours;
    let overTime = Math.abs(30000 - playTime);
    let h = Math.floor(overTime / 60);
    let m = overTime % 60;

    if (30000 >= playTime) {
        console.log(`Tom sleeps well`);
        console.log(`${h} hours and ${m} minutes less for play`);
    } else {
        console.log(`Tom will run away`);
        console.log(`${h} hours and ${m} minutes more for play`);
    }
}

sleepyTomCat("113");