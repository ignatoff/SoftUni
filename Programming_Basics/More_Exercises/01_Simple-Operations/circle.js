function circle(r) {

    r = Number(r);

    let face = Math.PI * r * r;
    let perimeter = Math.PI * r * 2;

    console.log(face.toFixed(2));
    console.log(perimeter.toFixed(2));

}

circle("4.5");