function cinema(type, rows, columns) {

    rows = Number(rows);
    columns = Number(columns);

    let capacity = rows * columns;
    let income;

    switch (type) {
        case "Premiere": income = capacity * 12; break;
        case "Normal": income = capacity * 7.50; break;
        case "Discount": income = capacity * 5; break;
    }
    console.log(`${income.toFixed(2)} leva`);

}

cinema("Normal", "21", "13");
