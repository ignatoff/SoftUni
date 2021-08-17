function solution() {
    const [gifts, sent, discarded] = document.querySelectorAll('ul');
    const input = document.querySelector('input');

    document.querySelector('button').addEventListener('click', addGift);

    function addGift() {
        const name = input.value;
        input.value = '';

        const liElement = e('li', name, 'gift');
        const sendBtn = e('button', 'Send', 'sendButton');
        const discardBtn = e('button', 'Discard', 'discardButton');
        
        liElement.appendChild(sendBtn);
        liElement.appendChild(discardBtn);
        
        sendBtn.addEventListener('click', () => toSend(name, liElement));
        discardBtn.addEventListener('click', () => toDiscard(name, liElement));
        
        gifts.appendChild(liElement);

        sorted();
    }
    
    function toSend(name, li) {
        li.remove();
        const liElement = e('li', name, 'gift');
        sent.appendChild(liElement);
    }

    function toDiscard(name, li) {
        li.remove();
        const liElement = e('li', name, 'gift');
        discarded.appendChild(liElement);
    }

    function sorted() {
        Array.from(gifts.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(g => gifts.appendChild(g));
    }

    function e(type, content, className) {
        const el = document.createElement(type);
        el.textContent = content;

        if (className) {
            el.className = className;
        }
        return el;
    }
}
