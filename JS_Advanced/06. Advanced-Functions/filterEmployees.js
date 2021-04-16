function filter(data, criteria) {
    const list = JSON.parse(data);
    const [key, value] = criteria.split('-');

    if (criteria != 'all') {
        const filtered = list.filter( emp => emp[key] == value);
        print(filtered);
    } else {
        print(list);
    }

    function print(obj) {
        obj.forEach((emp, i) => {
            console.log(`${i}. ${emp['first_name']} ${emp['last_name']} - ${emp.email}`);
        });
    }
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },  
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Male'
);