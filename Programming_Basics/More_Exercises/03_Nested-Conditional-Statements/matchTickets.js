function matchTickets(budget, category, fans) {

    budget = Number(budget);
    fans = Number(fans);

    let transport;
    let priceTickets;
    let expences;
    let final;

    if (fans <= 4) transport = budget * 0.75;
    else if (fans > 4 && fans <= 9) transport = budget * 0.60;
    else if (fans > 9 && fans <= 24) transport = budget * 0.50;
    else if (fans > 24 && fans <= 49) transport = budget * 0.40;
    else transport = budget * 0.25;

    switch (category) {
        case "VIP": priceTickets = 499.99 * fans; break;
        case "Normal": priceTickets = 249.99 * fans; break;
    }

    expences = budget - transport;
    final = Math.abs(priceTickets - expences);

    if (expences >= priceTickets) console.log(`Yes! You have ${final.toFixed(2)} leva left.`);
    else console.log(`Not enough money! You need ${final.toFixed(2)} leva.`);
}

matchTickets("30000", "VIP", "49");