function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const open = document.getElementsByTagName('section')[1].children[1];
    const inProgress = document.getElementsByTagName('section')[2].children[1];
    const complete = document.getElementsByTagName('section')[3].children[1];

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(ev) {
        ev.preventDefault();

        if (!task.value || !description.value || !date.value) { return; }

        const articleElement = e('article');
        const h3Element = e('h3', task.value);
        const pDescrElement = e('p', `Description: ${description.value}`);
        const pDateElement = e('p', `Due Date: ${date.value}`);
        const divElement = e('div', '', 'flex');
        const startBtn = e('button', 'Start', 'green');
        const deleteBtn = e('button', 'Delete', 'red');

        divElement.appendChild(startBtn);
        divElement.appendChild(deleteBtn);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(pDescrElement);
        articleElement.appendChild(pDateElement);
        articleElement.appendChild(divElement);
        open.appendChild(articleElement);

        deleteBtn.addEventListener('click', () => articleElement.remove());

        startBtn.addEventListener('click', () => {
            inProgress.appendChild(articleElement);

            startBtn.classList.remove('green');
            startBtn.classList.add('red');
            startBtn.textContent = 'Delete';

            deleteBtn.classList.remove('red');
            deleteBtn.classList.add('orange');
            deleteBtn.textContent = 'Finish';

            startBtn.addEventListener('click', () => articleElement.remove());
            
            deleteBtn.addEventListener('click', () => {
                articleElement.lastChild.remove();
                complete.appendChild(articleElement);
            });
        });

        task.value = '';
        description.value = '';
        date.value = '';
    }

    function e(type, content, className) {
        const el = document.createElement(type);

        if (content) { el.textContent = content; }

        if (className) { el.className = className; }

        return el;
    }
}
/*
function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const open = document.getElementsByTagName('section')[1].children[1];
    const inProgress = document.getElementsByTagName('section')[2].children[1];
    const complete = document.getElementsByTagName('section')[3].children[1];

    let duplicate;

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(ev) {
        ev.preventDefault();

        if (!task.value || !description.value || !date.value) {
            return;
        }

        const articleElement = e('article');
        const h3Element = e('h3', task.value);
        const pDescrElement = e('p', `Description: ${description.value}`);
        const pDateElement = e('p', `Due Date: ${date.value}`);
        const divElement = e('div', '', 'flex');
        const startBtn = e('button', 'Start', 'green');
        const deleteBtn = e('button', 'Delete', 'red');

        divElement.appendChild(startBtn);
        divElement.appendChild(deleteBtn);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(pDescrElement);
        articleElement.appendChild(pDateElement);
        articleElement.appendChild(divElement);
        open.appendChild(articleElement);

        duplicate = articleElement.cloneNode(true);

        open.addEventListener('click', startTask);
        inProgress.addEventListener('click', finishTask);
        wrapper.addEventListener('click', deleteTask);

        // task.value = '';
        // description.value = '';
        // date.value = '';
    }

    function startTask(ev) {
        ev.preventDefault();

        if (ev.target.className === 'green') {
            const articleElement = e('article');
            const h3Element = e('h3', task.value);
            const pDescrElement = e('p', `Description: ${description.value}`);
            const pDateElement = e('p', `Due Date: ${date.value}`);
            const divElement = e('div', '', 'flex');
            const deleteBtn = e('button', 'Delete', 'red');
            const finishBtn = e('button', 'Finish', 'orange');

            divElement.appendChild(deleteBtn);
            divElement.appendChild(finishBtn);
            articleElement.appendChild(h3Element);
            articleElement.appendChild(pDescrElement);
            articleElement.appendChild(pDateElement);
            articleElement.appendChild(divElement);
            inProgress.appendChild(articleElement);
            // const div = duplicate.lastChild;
            // let btnL = e('button', 'Delete', 'red');
            // let btnR = e('button', 'Fnish', 'orange');
            const toDelete = ev.target.parentNode.parentNode;

            // div.appendChild(btnL);
            // div.appendChild(btnR);
            // inProgress.appendChild(duplicate);

            // div.children[0].remove();
            // div.children[1].remove();
            toDelete.remove();
        }
    }

    function finishTask(ev) {
        ev.preventDefault();

        if (ev.target.className === 'orange') {
            const articleElement = e('article');
            const h3Element = e('h3', task.value);
            const pDescrElement = e('p', `Description: ${description.value}`);
            const pDateElement = e('p', `Due Date: ${date.value}`);

            articleElement.appendChild(h3Element);
            articleElement.appendChild(pDescrElement);
            articleElement.appendChild(pDateElement);
            complete.appendChild(articleElement);
            // const div = duplicate.lastChild;
            const toDelete = ev.target.parentNode.parentNode;
            //
            // complete.appendChild(duplicate);
            //
            // div.children[0].remove();
            // div.children[1].remove();
            toDelete.remove();

            task.value = '';
            description.value = '';
            date.value = '';

        }
    }

    function deleteTask(ev) {
        ev.preventDefault();

        if (ev.target.className === 'red') {
            const toDelete = ev.target.parentNode.parentNode;
            toDelete.remove();
        }
    }

    function e(type, content, className) {
        const el = document.createElement(type);

        if (content) { el.textContent = content; }

        if (className) { el.className = className; }

        return el;
    }
}
*/