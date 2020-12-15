function gifts(n, m, s) {

    n = Number(n);
    m = Number(m);
    s = Number(s);

    let rec = "";

    for (let i = m; i >= n; i--) {

        if (i % 2 == 0 && i % 3 == 0) {

            if (i % 2 == 0 && i % 3 == 0 && i == s) {
                break;
            }
            rec += i + " ";
        }
    }
    console.log(rec);
}

gifts(
    "20",
    "100",
    "36"
);