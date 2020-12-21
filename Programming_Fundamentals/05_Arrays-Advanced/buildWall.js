function buildWall(array) {
    
    let construction = [];
    let sum = 0;
    let start = Math.min(...array);
    
    for (let i = start; i < 30; i++) {
        let index = 0;
        
        while (index > -1) {
            index = array.indexOf(30);
            
            if (index == -1) break;
            
            array.splice(index, 1);
        }
        let sections = array.length;
        let concretePerFoot = sections * 195;
        sum += concretePerFoot;
        construction.push(concretePerFoot);
        let iterated = array.map(x => x + 1);
        array = iterated;
    }
    let price = sum * 1900;
    console.log(construction.join(', '));
    console.log(`${price} pesos`);   
}

buildWall([21, 25, 28]);