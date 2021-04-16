function solve() {

    const typo = document.getElementById('input').value;
    const array = typo.split('.').filter(x => x != '');
    const result = document.getElementById('output');

    for (let i = 0; i < array.length; i += 3) {
        const paragraph = array.slice(i, i + 3).join('.') + '.';
        result.innerHTML += `<p>${paragraph}</p>`;
    }
}

/*
function solve() {
    
    const inputText = document.getElementById('input').innerText;
    const outputElement = document.getElementById('output');

    inputText
        .match(/(?:\s*)([^.!?]+[.!?]+)/g)
        .map(sentence => sentence.trim())
        .reduce((acc, sentence, index) => {
            if (index % 3 === 0) { acc.push([sentence]); } else { acc[acc.length - 1].push(sentence); }
            return acc;
        }, [])
        .forEach(paragraph => {
            let parHTML = document.createElement('p');
            parHTML.textContent = paragraph;
            outputElement.appendChild(parHTML);
        });
}

Конкретно за задачата:

    .reduce((acc, sentence, index) => { (1)
      if (index % 3 === 0) { acc.push([sentence]); } else { acc[acc.length - 1].push(sentence); } (2)
      return acc; (3)
    }, []) (4)

1. acc - това е, което се връща от функцията (в слуая ще е масив от масиви с до 3 елемента всеки), sentence - текущият елелемнт от масива, който редуцираме, index - индекса на тек. елемент в масива, който се редуцира
2. Това е основната логика: ако индекса се дели на 3 без остатък (т.е. 0, 3, 6 и т.н.), добавяме нов масив в acc с един елемент - sentence, иначе - добавяме тек. елемент към последния масив в acc
3. Връщаме acc за използване в следващата итерация или като изход от reduce, когато сме обработили всички елементи от масива, върху който е извикан reduce метода
4. [] е началната стойност на acc - в случая празен масив.
*/