function fruit(name, weightGr, pricePerKg) {
    
    let total = (weightGr / 1000) * pricePerKg;

    return `I need $${total.toFixed(2)} to buy ${(weightGr / 1000).toFixed(2)} kilograms ${name}.`
}

console.log(fruit('orange', 2500, 1.80));
console.log(fruit('apple', 1563, 2.35));
