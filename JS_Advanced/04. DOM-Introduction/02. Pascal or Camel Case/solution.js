function solve() {

    let str = document.getElementById('text').value.toLowerCase().split(' ');
    const caseType = document.getElementById('naming-convention').value;
    
    if (caseType.includes('Camel')) {
        let camels = str.splice(1).map(x => x[0].toUpperCase() + x.slice(1));
        str = str.concat(camels);
    } else if (caseType.includes('Pascal')) {
        str = str.map(x => x[0].toUpperCase() + x.slice(1));
    } else {
        str = ['Error!'];
    }
    document.getElementById('result').textContent = str.join('');
}