function shopping(budget, video, cpu, ram) {

    budget = Number(budget);
    video = Number(video);
    cpu = Number(cpu);
    ram = Number(ram);

    let sumVideo = video * 250;
    let sumCpu = cpu * (sumVideo * 0.35);
    let sumRam = ram * (sumVideo * 0.10);
    let result = sumVideo + sumCpu + sumRam;

    if (video > cpu) {
        result -= (result * 15) / 100;
    }
    let total = Math.abs(budget - result);

    if (budget >= result) console.log(`You have ${total.toFixed(2)} leva left!`);
    else console.log(`Not enough money! You need ${total.toFixed(2)} leva more!`);
}

shopping(
    "900",
    "2",
    "1",
    "3"
);