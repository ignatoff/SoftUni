function france(array) {

    let items = array.shift().split('|');
    let budget = Number(array[0]);
    let bought = [];
    let sum = 0;

    for (const el of items) {
        let [type, price] = el.split('->');
        price = Number(price);

        if (type == 'Clothes' && price <= 50 && budget >= price) {
            budget -= price;
            bought.push(price);
        } else if (type == 'Shoes' && price <= 35 && budget >= price) {
            budget -= price;
            bought.push(price);
        } else if (type == 'Accessories' && price <= 20.50 && budget >= price) {
            budget -= price;
            bought.push(price);
        }
    }
    bought = bought.map(x => (x * 1.40));    
    bought.forEach(a => sum += a);
    sum += budget;    
    let profit = sum - Number(array[0]);
    bought = bought.map(a => a.toFixed(2))

    console.log(bought.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);

    sum >= 150 ? console.log(`Hello, France!`) : console.log(`Time to go.`);   
}

france(
    [
        'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
        '120'
      ]
);