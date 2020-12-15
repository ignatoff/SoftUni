function housePainting(x, y, h) {

    x = Number(x);
    y = Number(y);
    h = Number(h);

    let frontBack = (x * x * 2) - 1.2 * 2;
    let leftRight = (x * y * 2) - 1.5 * 1.5 * 2;
    let greenPaint = (frontBack + leftRight) / 3.4;

    let topFB = 2 * x * (h / 2);
    let topSides = 2 * x * y;
    let redPaint = (topFB + topSides) / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}

housePainting("6", "10", "5.2")