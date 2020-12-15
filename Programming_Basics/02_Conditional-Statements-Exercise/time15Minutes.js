function time15Minutes(hours, input) {

    hours = Number(hours);
    input = Number(input);

    let minutes = input + 15;

    if (minutes > 59) {
        minutes %= 60;
        hours += 1;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (hours > 23) {
        hours %= 24;
    }

    console.log(`${hours}:${minutes}`);

}

time15Minutes("23", "49");