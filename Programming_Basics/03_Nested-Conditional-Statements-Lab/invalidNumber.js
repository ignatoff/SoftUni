function invalidNumber(num) {

    num = Number(num);

    if (num == 0 || num >= 100 && num <= 200) {

    } else {
        console.log("invalid");

    }
}

invalidNumber("0");