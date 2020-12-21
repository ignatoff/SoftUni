function companyUsers(array) {

    let data = {};

    for (const line of array) {
        let [company, employee] = line.split(' -> ');

        if (!data.hasOwnProperty(company)) data[company] = new Set();
        
        data[company].add(employee);        
    }
    let sorted = Object.keys(data).sort((a, b) => a[0].localeCompare(b[0]));

    for (const name of sorted) {
        console.log(name);
        
        for (const employee of data[name].keys()) {
            console.log(`-- ${employee}`);            
        }        
    }
}

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
);
console.log(`----------------`);

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]
);