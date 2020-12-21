function bonusSystem(array) {
    
    array = array.map(Number);
    let numStudents = array.shift();
    let lectures = array.shift();
    let bonus = array.shift();
    let maxBonus = 0;
    let attended = 0;

    for (const el of array) {
        let totalBonus = (el / lectures) * (5 + bonus);
        
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            attended = el;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attended} lectures.`);    
}

bonusSystem(
    [
        '5',  '25', '30',
        '12', '19', '24',
        '16', '20'
      ]      
);