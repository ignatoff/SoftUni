function smallest(array) {

    let sorted = array.sort((a, b) => a - b);
    sorted.splice(2);
    console.log(sorted.join(' '));
    
}

smallest([30, 15, 50, 5]);
smallest([3, 0, 10, 4, 7, 3]);