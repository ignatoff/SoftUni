function pcStore(array) {

    let client = array.pop();
    array = array.map(Number);
    let taxFree = 0;
    let total = 1.2;
    
    for (const num of array) {
        let price = Number(num);
        
        if (price < 0) {
            console.log(`Invalid price!`);
            continue;
        }
        taxFree += price;
    }
    total *= taxFree;
    let taxes = total - taxFree;

    if (client == 'special') total *= 0.90;    

    if (taxFree <= 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${taxFree.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${total.toFixed(2)}$`);
    }    
}

pcStore(
    [
        '1023', 
        '15', 
        '-20',
        '-5.50',
        '450', 
        '20', 
        '17.66', 
        '19.30', 'regular'
        ]       
);