function dayOfWeek(day) {

    let result = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7,
    };

    return result[day] || 'error';
    
    /*
    if (day == 'Monday') return 1;
    else if (day == 'Tuesday') return 2;
    else if (day == 'Wednesday') return 3;
    else if (day == 'Thursday') return 4;
    else if (day == 'Friday') return 5;
    else if (day == 'Saturday') return 6;
    else if (day == 'Sunday') return 7;
    else return 'error';
    */
}

console.log(dayOfWeek('Mgonday'));
console.log(dayOfWeek('Friday'));
console.log(dayOfWeek('Invalid'));
