function lowest(flow) {

    let min = 100000;

    for (let i = 1; i < flow.length; i++) {
        let num = Number(flow[i]);

        if (num < min) {
            min = num;
        }
    }
    console.log(min);

}

lowest(["4", "45", "-20", "7", "99"]);

