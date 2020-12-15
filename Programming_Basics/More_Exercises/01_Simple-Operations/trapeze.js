function trapeze(a, b, h) {

    a = Number(a);
    b = Number(b);
    h = Number(h);

    let area = (a + b) * h / 2;

    console.log(area.toFixed(2));

}

trapeze("8", "13", "7");