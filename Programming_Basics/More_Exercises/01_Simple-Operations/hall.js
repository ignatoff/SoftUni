function hall(l, w) {

    l = Number(l) * 100;
    w = Number(w) * 100;

    let sidewalk = w - 100;
    let placeW = Math.floor(sidewalk / 70);
    let placeL = Math.floor(l / 120);
    let all = (placeL * placeW) - 3;

    console.log(all);

}

hall("8.4", "5.2");