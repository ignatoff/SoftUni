function radiansToDegrees(arg) {

    let radian = Number(arg);
    let degree = radian * (180 / Math.PI);
    console.log(degree.toFixed(0));

}

radiansToDegrees("0.5236");