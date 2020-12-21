function travelTime(array) {

    let list = {};

    for (const line of array) {
        let [country, town, price] = line.split(' > ');
        price = Number(price);

        if (!list.hasOwnProperty(country)) {
            list[country] = { [town]: price };
        } else {

            if (list[country].hasOwnProperty(town)) {
                
                if (price < list[country][town]) list[country][town] = price;
            } else {
                list[country][town] = price;
            }
        }
    }
    let compared = Object.keys(list).sort((a, b) => a[0].localeCompare(b[0]));
    let result = '';

    for (const country of compared) {
        result += `${country} -> `;
        let sorted = Object.keys(list[country]).sort((a, b) => travelCost(a, b, list, country));

        for (const town of sorted) {
            result += `${town} -> ${list[country][town]} `;
        }
        result += '\n';
    }
    console.log(result);    

    function travelCost(town1, town2, destination, country) {
        let x = destination[country][town1];
        let y = destination[country][town2];
        return x - y;
    }
}

travelTime(
    [
        "Bulgaria > Sopot > 800",
        "Bulgaria > Sofia > 500",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);