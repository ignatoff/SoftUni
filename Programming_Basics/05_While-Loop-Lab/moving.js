function solve(input) {

    let index = 0;
    let width = input[index];
    index++;
    let length = input[index];
    index++;
    let height = input[index];
    index++;
    let freeSpace = width * length * height;
    let boxes = input[index];
    index++;


    while (boxes !== "Done") {
        let num = Number(boxes);
        boxes = input[index];
        index++;
        freeSpace -= num;

        if (freeSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
            freeSpace
        }
    }
    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);

    }
}

solve(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);
