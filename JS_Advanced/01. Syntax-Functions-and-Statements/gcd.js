function gcd(a, b) {

    let remainder = a % b;

    while (remainder > 0) {
        a = b;
        b = remainder;
        remainder = a % b;
    }

    return b;
}
//For example, to compute gcd(48,18), divide 48 by 18 to get a quotient of 2 and a remainder of 12. Then divide 18 by 12 to get a quotient of 1 and a remainder of 6. Then divide 12 by 6 to get a remainder of 0, which means that 6 is the gcd.

console.log(gcd(15, 5));
console.log(gcd(2154, 458));
