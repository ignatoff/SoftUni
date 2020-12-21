function schoolGrades(array) {

    let list = new Map();

    for (const line of array) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!list.has(name)) {
            list.set(name, []);
        }
        let previous = list.get(name);
        previous.push(...grades);
    }
    
    let sorted = Array.from(list.entries()).sort(average);
    
    for (const [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
        
    }

    function average(a, b) {
        let avgA = a[1].reduce((acc, c) => acc + c, 0) / a[1].length; 
        let avgB = b[1].reduce((acc, c) => acc + c, 0) / b[1].length; 
        return avgA - avgB;
    }
}

schoolGrades(
    ['Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6']

);