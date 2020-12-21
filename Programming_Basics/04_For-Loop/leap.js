function leap(start, end) {

    start = Number(start);
    end = Number(end);

    for (let i = start; i <= end; i++) {
        if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0))
            console.log(i);

    }
}

leap("1483", "1607");