function NumbersSum(txt) {

    txt += "";
    let sum = 0;

    for (let i = 0; i < txt.length; i++) {
        let num = Number(txt[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`);

}

NumbersSum("654127");