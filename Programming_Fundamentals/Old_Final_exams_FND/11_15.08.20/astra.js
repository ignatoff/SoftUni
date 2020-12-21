function astra([arr]) {

    let sample = /(\||#)(?<item>[\sA-Za-z]+)\1(?<exp>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,4}|10000)\1/g;
    let match;
    let food = [];
    let calories = 0;

    while ((match = sample.exec(arr)) != null) {
        calories += Number(match.groups.cal);
        let item = match.groups.item;
        let exp = match.groups.exp;
        let cal = match.groups.cal;
        food.push(`Item: ${item}, Best before: ${exp}, Nutrition: ${cal}`)
    }
    let days = Math.floor(calories / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    console.log(food.join('\n'));    
}

astra(
    ['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']
);

console.log(`----------------------------`);

astra(
    ['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
);

console.log(`----------------------------`);

astra(
    ['Hello|#Invalid food#19/03/20#450|$5*(@']
);