function search() {

    const typo = document.getElementById('searchText').value;
    const towns = document.getElementsByTagName('li');
    const result = document.getElementById('result');
    let counter = 0;
    
    for (const town of towns) {
        
        if (town.textContent.toLowerCase().includes(typo.toLowerCase())) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            counter++;
        } else {
            town.style.fontWeight = '';
            town.style.textDecoration = '';
        }
    }
    result.textContent = `${counter} matches found`;
}