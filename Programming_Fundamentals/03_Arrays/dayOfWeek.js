function dayOfWeek(n) {

    let arr = [
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday', 
        'Sunday'
    ];
    if (n >= 0 && n <= 7){
        console.log(arr[n -1]);
    } else {
        console.log(`Invalid day!`);        
    }       
}

dayOfWeek(-13);