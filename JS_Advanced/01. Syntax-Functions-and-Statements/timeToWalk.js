function timeToWalk(steps, footprint, speedKmH) {
    
    let speedMS = speedKmH * 1000 / 3600;
    let distance = steps * footprint;
    let breaks = Math.floor(distance / 500) * 60;
    let time = Math.round((distance / speedMS) + breaks);

    let seconds = time % 60;
    time -= seconds;
    let minutes = time / 60;
    let hours = 0;

    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes %= 60;
    } 
    
    return `${(hours + '').padStart(2, '0')}:${(minutes + '').padStart(2, '0')}:${(seconds + '').padStart(2, '0')}`;
}

console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));
