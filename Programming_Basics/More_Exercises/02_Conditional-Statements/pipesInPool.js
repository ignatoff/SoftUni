function pipesInPool(volume, pipe1, pipe2, hours) {

    volume = Number(volume);
    pipe1 = Number(pipe1);
    pipe2 = Number(pipe2);
    hours = Number(hours);

    let fill1 = pipe1 * hours;
    let fill2 = pipe2 * hours;
    let fill = fill1 + fill2;

    if (fill <= volume) {
        let percentFill = fill / volume * 100;
        let percent1 = fill1 / fill * 100;
        let percent2 = fill2 / fill * 100;

        console.log(`The pool is ${percentFill.toFixed(2)}% full. Pipe 1: ${percent1.toFixed(2)}%. Pipe 2: ${percent2.toFixed(2)}%.`);

    } else {
        let over = fill - volume;

        console.log(`For ${hours} hours the pool overflows with ${over.toFixed(2)} liters.`);

    }

}

pipesInPool("100", "100", "100", "2.5");