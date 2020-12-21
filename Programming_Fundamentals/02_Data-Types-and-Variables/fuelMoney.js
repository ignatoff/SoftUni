function fuelMoney(distance, passengers, price) {

    let consumption = (distance / 100) * 7;
    consumption += passengers * 0.1;
    let needed = consumption * price;
    console.log(`Needed money for that trip is ${needed}lv.`);   

}

fuelMoney(260, 9, 2.49);