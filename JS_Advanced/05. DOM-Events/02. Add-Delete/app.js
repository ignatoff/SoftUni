function addItem() {
    const input = document.getElementById('newText'); //judge ID different
    const liElement = createElement('li', input.value);
    document.getElementById('items').appendChild(liElement);

    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (event) => {
        event.target.parentNode.remove();
    })

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
    input.value = '';
}