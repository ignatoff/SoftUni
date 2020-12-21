function pyramid(base, increment) {

    let height = 0;
    let step = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let bulk = 0;
    let outer = 0;

    for (let i = base; i >= 1; i -= 2) {
        height++;
        step++;

        if (i <= 2){
            gold = i * i * increment;
            break;
        }
        bulk = ((i - 2) * (i - 2)) * increment;
        outer = ((i * 4) - 4) * increment;
        stone += bulk;
        
        if (step < 5){
            marble += outer;
        } else {
            lapis += outer;
            step = 0;
        }        
    }
    height *= increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
    
}

pyramid(23, 0.5);