function travelAgency(tickets, budget, price) {

    tickets = Number(tickets);
    budget = Number(budget);
    price = Number(price);

    let all = tickets * price;
    let left = Math.abs(all - budget);

    if (all > budget) {
        console.log(`The budget of ${budget}$ is not enough. Your client can't buy ${tickets} tickets with this budget!`);
    } else {
        console.log(`You can sell your client ${tickets} tickets for the price of ${all}$!`);
        console.log(`Your client should become a change of ${left}$!`);
    }
}

travelAgency(
    "5",
    "2000",
    "300"
);