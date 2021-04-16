function solve() {
    const output = document.querySelector('textarea');
    let total = 0;
    const items = new Set();

    document.querySelector('.shopping-cart').addEventListener('click', (ev) => {

        if (ev.target.tagName === 'BUTTON' && ev.target.className === 'add-product') {
            const product = ev.target.parentNode.parentNode;
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);
            total += price;
            items.add(name);
            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        }
    });

    document.querySelector('.checkout').addEventListener('click', () => {
        output.value += `You bought ${Array.from(items).join(', ')} for ${total.toFixed(2)}.`
        Array.from(document.getElementsByTagName('button')).forEach( btn => btn.disabled = true);
    });
}