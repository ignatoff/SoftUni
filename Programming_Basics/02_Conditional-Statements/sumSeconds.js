function sumSeconds(pl1, pl2, pl3) {

    pl1 = Number(pl1);
    pl2 = Number(pl2);
    pl3 = Number(pl3);

    let time = pl1 + pl2 + pl3;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    console.log(`${minutes}:${seconds}`);


}

sumSeconds("22", "7", "34");