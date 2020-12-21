function fishTank(length, width, height, percent) {

    length = Number(length);
    width = Number(width);
    height = Number(height);
    percent = Number(percent) / 100;

    let cm3 = length * width * height;
    let liters = cm3 / 1000;
    let result = liters - (liters * percent);

    console.log(result);

}

fishTank("85", "75", "47", "17");
