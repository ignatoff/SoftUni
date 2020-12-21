function numbers(str) {
    
    let sequence = str.split(' ').map(Number);
    let sum = 0;

    sequence.forEach(x => sum += x);

    let overAv = sequence.filter(x => x > (sum / sequence.length)).sort((a, b) => b - a);
    overAv = overAv.slice(0, 5);

    console.log(overAv.join(' ') || 'No');    
}

numbers('1');