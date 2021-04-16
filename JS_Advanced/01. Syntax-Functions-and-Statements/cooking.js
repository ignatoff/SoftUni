function cooking(num, op1, op2, op3, op4, op5) {
    
    let currentNum = Number(num);
    let array = [op1, op2, op3, op4, op5];
    let final = [];
    let list = {
        chop: function (currentNum) {
            currentNum /= 2;
            return currentNum;
        },
        dice: function (currentNum) {
            currentNum = Math.sqrt(currentNum);
            return currentNum;
        },
        spice: function (currentNum) {
            currentNum += 1;
            return currentNum;
        },
        bake: function (currentNum) {
            currentNum *= 3;
            return currentNum;
        },
        fillet: function (currentNum) {
            currentNum = (currentNum * 80) / 100;
            return currentNum;
        },
    }

    for (const op of array) {
        final.push(list[op](currentNum));  
        currentNum = list[op](currentNum);
    }

    return final.join('\n')
}

console.log(cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));
