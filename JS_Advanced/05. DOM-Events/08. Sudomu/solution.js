function solve() {
    let inputs = document.querySelectorAll('input');
    const table = document.querySelector('table');
    const message = document.querySelector('#check p');
    const [checkBtn, clearBtn] = document.querySelectorAll('button');

    checkBtn.addEventListener('click', toCheck);
    clearBtn.addEventListener('click', toClear);

    function toCheck(event) {
        event.preventDefault();

        let matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ];
        let isSudomu = true;
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            console.log(col.length);
            console.log([... new Set(col)].length);
            
            if (col.length != [... new Set(col)].length || row.length != [... new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }
        if (isSudomu) {
            table.style.border = '2px solid green';
            message.textContent = 'You solve it! Congratulations!';
            message.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            message.textContent = 'NOP! You are not done yet...';
            message.style.color = 'red';
        }
    }

    function toClear(event) {
        event.preventDefault();

        [...inputs].forEach(i => i.value = '');
        table.style.border = 'none';
        message.textContent = '';
    }
}