function yardGreening(arg) {

    let area = Number(arg);
    let price = area * 7.61;
    let discount = price * 0.18;
    let final = price - discount;

    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening("150")