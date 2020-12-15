function areaOfFigures(arg1, arg2, arg3) {

    arg2 = Number(arg2);
    arg3 = Number(arg3);

    let area = 0;

    if (arg1 === "square") {
        area = arg2 * arg2;

    } else if (arg1 === "rectangle") {
        area = arg2 * arg3;

    } else if (arg1 === "circle") {
        area = Math.PI * arg2 * arg2;

    } else if (arg1 === "triangle") {
        area = arg2 * arg3 / 2;
    }
    console.log(area.toFixed(3));

}

areaOfFigures("square", "5");