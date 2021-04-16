function addItem() {
    const input = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');
    const liElement = document.createElement('li');
    const newLi = ulElement.appendChild(liElement);
    newLi.textContent = input.value;
    input.value = '';
}