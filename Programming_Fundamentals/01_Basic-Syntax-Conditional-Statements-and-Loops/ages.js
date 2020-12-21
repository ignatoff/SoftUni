function ages(n) {

    if (n > 65) {
        console.log(`elder`);

    } else if (n > 19) {
        console.log(`adult`);

    } else if (n > 13) {
        console.log(`teenager`);

    } else if (n > 2) {
        console.log(`child`);

    } else if (n > -1) {
        console.log(`baby`);

    } else {
        console.log(`out of bounds`);

    }
}

ages(66);