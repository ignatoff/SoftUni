function renovation(input) {

    let h = Number(input[0]);
    let w = Number(input[1]);
    let percent = Number(input[2]);
    let index = 3;
    let paint = input[index];
    let area = h * w * 4;
    area -= (area * percent) / 100;
    let isPainted = false;
    
    while (paint != "Tired!"){
        paint = Number(input[index]);
        area -= paint;

        if (area <= 0){
            isPainted = true;
            break;
        }
        index++;
        paint = input[index];
    }

    if (isPainted & area == 0){
        console.log(`All walls are painted! Great job, Pesho!`);        
    } else if (isPainted & area < 0){
        area = Math.abs(area);
        console.log(`All walls are painted and you have ${area} l paint left!`);        
    } else {
        console.log(`${area} quadratic m left.`);        
    }
}

renovation([
    "3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"
]);