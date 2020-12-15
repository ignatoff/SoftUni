function worldSwimmingRecord(worldRecord, m, sec) {

    worldRecord = Number(worldRecord);
    m = Number(m);
    sec = Number(sec);

    let time = m * sec;
    let slow = Math.floor(m / 15);
    let delay = slow * 12.5;
    let total = time + delay;

    if (total < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`);

    } else {
        console.log(`No, he failed! He was ${(total - worldRecord).toFixed(2)} seconds slower.`);

    }

}

worldSwimmingRecord("10464", "1500", "20");
