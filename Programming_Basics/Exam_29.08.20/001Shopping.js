function shopping(pencils, felttips, skechbooks, notebooks) {

    pencils = Number(pencils);
    felttips = Number(felttips);
    skechbooks = Number(skechbooks);
    notebooks = Number(notebooks);

    let total = (pencils * 4.75) + (felttips * 1.80) + (skechbooks * 6.50) + (notebooks * 2.50);
    let final = total - ((total * 5) / 100);

    console.log(`Your total is ${final.toFixed(2)}lv`);
}

shopping(
    "3",
    "10",
    "3",
    "7"
);