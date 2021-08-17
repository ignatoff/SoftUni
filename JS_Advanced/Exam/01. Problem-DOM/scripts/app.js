function solve() {
    const [bookTitle, bookYear, bookPrice] = document.querySelectorAll('input');
    const [oldBooks, newBooks] = document.querySelectorAll('.shelf');
    const header = document.querySelectorAll('h1')[1];

    let total = 0;

    document.querySelector('form').addEventListener('submit', addBook);

    function addBook(event) {
        event.preventDefault();

        const title = bookTitle.value;
        const year = Number(bookYear.value);
        const price = Number(bookPrice.value);

        if (title == '' || year <= 0 || price <= 0) {
            return;
        }

        const div = e('div', 'book');
        const p = e('p', '', `${title} [${year}]`);
        const buyNewBtn = e('button', 'buy-new', `Buy it only for ${price.toFixed(2)} BGN`);
        const buyOldBtn = e('button', 'buy-old', `Buy it only for ${(price * 0.85).toFixed(2)} BGN`);
        const oldBtn = e('button', 'to-old', 'Move to old section');

        div.appendChild(p);
        
        if (year >= 2000) {
            div.appendChild(buyNewBtn);
            div.appendChild(oldBtn);
            newBooks.appendChild(div);
        } else {
            div.appendChild(buyOldBtn);
            oldBooks.appendChild(div);
        }
        
        buyNewBtn.addEventListener('click', () => buyBook(div, price));
        buyOldBtn.addEventListener('click', () => buyBook(div, (price * 0.85)));
        oldBtn.addEventListener('click', () => moveToOld(div, title, year, price));
        
        bookTitle.value = '';
        bookYear.value = '';
        bookPrice.value = '';
    }
    
    function e(tag, className, text) {
        const element = document.createElement(tag);
        if (className) { element.className = className; }
        if (text) { element.textContent = text; }
        
        return element;
    }
    
    function buyBook(el, price) {
        el.remove();
        total += price;
        
        header.innerHTML = `Total Store Profit: ${total.toFixed(2)} BGN`;
    }
    
    function moveToOld(el, title, year, price) {
        el.remove();
        const div = e('div', 'book');
        const p = e('p', '', `${title} [${year}]`);
        const buyOldBtn = e('button', 'buy-old', `Buy it only for ${(price * 0.85).toFixed(2)} BGN`);
        
        div.appendChild(p);
        div.appendChild(buyOldBtn);
        oldBooks.appendChild(div);

        buyOldBtn.addEventListener('click', () => buyBook(div, (price * 0.85)));
    }
}
