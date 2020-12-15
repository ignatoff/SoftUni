function cat(minutes, times, dailyCal) {

    minutes = Number(minutes);
    times = Number(times);
    dailyCal = Number(dailyCal);

    let cal = 5;
    let calPerWalk = cal * minutes;
    let totalCal = calPerWalk * times;

    if (totalCal >= (dailyCal / 2)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCal}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCal}.`);
    }
}

cat("30",
    "3",
    "600"
);