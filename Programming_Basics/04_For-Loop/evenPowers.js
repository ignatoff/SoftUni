function evenPowers(n) {

    n = Number(n);

    for (let i = 0; i <= n; i += 2) {
        let result = Math.pow(2, i);

        console.log(result);
    }
}

evenPowers("6")