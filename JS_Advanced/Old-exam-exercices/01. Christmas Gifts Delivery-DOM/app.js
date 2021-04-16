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

// function solution() {
//     let btnAdd = document.querySelector('button')
//     let input1 = document.querySelector("input")
//     let sections = document.querySelectorAll('section')
//     let giftSection = sections[1]
//     let sendSection = sections[2]
//     let discardSection = sections[3]
//     let ulSend = giftSection.lastElementChild
//     let ulDiscard = discardSection.lastElementChild
   
   
//     btnAdd.addEventListener('click', (e) => {
//       e.preventDefault()
//       let input = input1.value
//       input1.value = ''
   
//       let li1 = document.createElement('li')
//       li1.setAttribute('class', 'gift')
//       li1.textContent = input
   
//       let btnSend = document.createElement('button')
//       btnSend.setAttribute('class', 'sendButton')
//       btnSend.textContent = 'Send'
//       li1.appendChild(btnSend)
   
//       let btnDiscard = document.createElement('button')
//       btnDiscard.setAttribute('class', 'discardButton')
//       btnDiscard.textContent = 'Discard'
//       li1.appendChild(btnDiscard)
   
//       ulSend.appendChild(li1)
   
//       let li = Array.from(ulSend.querySelectorAll('li'))
//       let sorted = li.sort((a, b) => a.innerText.localeCompare(b.innerText))
//       for (let el of sorted) {
//         ulSend.appendChild(el)
//       }
//       btnSend.addEventListener('click', () => {
//         sendSection.appendChild(li1)
//         btnSend.remove()
//         btnDiscard.remove()
//       })
   
//       btnDiscard.addEventListener('click', () => {
//         discardSection.appendChild(li1)
//         btnSend.remove()
//         btnDiscard.remove()
//       })   
//     })  
//   }

/*
function solution() {
    // attach event listeners to input form
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);

    // create gift elements with buttons
    function addGift() {
        const name = input.value;
        input.value = '';

        const element = e('li', name, 'gift');
        const sendBtn = e('button', 'Send', 'sendButton');
        const discardBtn = e('button', 'Discard', 'discardButton');
        element.appendChild(sendBtn);
        element.appendChild(discardBtn);

        sendBtn.addEventListener('click', () => sendGift(name, element));
        discardBtn.addEventListener('click', () => discardGift(name, element));

        gifts.appendChild(element);

        sortGifts();
    }

    // logic for sending gifts
    function sendGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        sent.appendChild(element);
    }

    // logic for discarding gifts
    function discardGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        discarded.appendChild(element);
    }

    // sort gifts list
    function sortGifts() {
        Array
            .from(gifts.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(g => gifts.appendChild(g));
    }

    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}
*/