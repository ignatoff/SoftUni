function employees(array) {
  
    let employee = [];

    for (const info of array) {
        let person = {
            name: info,
            number: info.length
        }
        employee.push(person);
    }
    employee.forEach(obj => {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);        
    });       
}

employees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
        ]        
);