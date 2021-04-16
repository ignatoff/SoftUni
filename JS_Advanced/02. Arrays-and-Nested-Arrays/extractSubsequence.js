function extractSubsequence(array) {

    return array.reduce((acc, c) => {

        let i = acc.length - 1;

        if (c >= acc[i] || acc.length === 0) {
            acc.push(c);
            return acc;
        }

        return acc;
    }, []);
}
/*
    let result = [array[0]];
 
    for (let i = 1; i < array.length; i++) {
        let prev = result[result.length - 1];
        let curr = array[i];
 
        if (curr >= prev) result.push(curr);
    }
    */

console.log(extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractSubsequence([1, 2, 3, 4]));
console.log(extractSubsequence([20, 3, 2, 15, 6, 1]));
