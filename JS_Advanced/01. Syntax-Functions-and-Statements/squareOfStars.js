function squareOfStars(arg) {
    
    if (!arg) {
        let row = '';

        for (let i = 1; i <= 5; i++) {
            
            if (i == 5) row += `* * * * *`;
            else row += `* * * * *\n`;
            
        }
        return row;
    } else {
        let line = '';
        let row = '';

        for (let i = 1; i <= arg; i++) {
            line += '* ';
        }

        for (let j = 1; j <= arg; j++) {

            if (j == arg) row += line;
            else row += `${line}\n`;
        }
        return row;            
    }
}

console.log(squareOfStars(1));
console.log(squareOfStars(2));
console.log(squareOfStars(5));
console.log(squareOfStars());
