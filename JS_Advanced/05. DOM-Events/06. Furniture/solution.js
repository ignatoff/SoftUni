function solve() {
    const [input, output] = [...document.querySelectorAll('textarea')];
    const bodyEl = document.querySelector('table.table tbody');
    const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];
  
    const furniture = [];
  
    generateBtn.addEventListener('click', function () {
      const list = JSON.parse(input.value.trim());
      bodyEl.innerHTML = '';
  
      list.forEach(l => {
        const item = createRow(l);
        furniture.push(item);
        bodyEl.appendChild(item.element);
      });
    });
  
    buyBtn.addEventListener('click', function () {
      const result = { names: [], price: 0, factor: 0, };
  
      furniture.filter(f => f.isChecked())
        .forEach(check => {
            result.names.push(check.getValues().name);
            result.price += Number(check.getValues().price);
            result.factor += Number(check.getValues().decFactor);
        });
  
      output.value = `Bought furniture: ${result.names.join(', ')}\nTotal price: ${result.price.toFixed(2)}\nAverage decoration factor: ${result.factor / result.names.length}`;
    });
  
    function createRow(data) {
      const img = e('img');
      img.src = data.img;
  
      const checkbox = e('input');
      checkbox.type = 'checkbox';
  
      const element = e('tr',
        e('td', img),
        e('td', e('p', data.name)),
        e('td', e('p', data.price)),
        e('td', e('p', data.decFactor)),
        e('td', checkbox));
  
      return { element, isChecked, getValues, };
  
      function isChecked() {
        return checkbox.checked;
      }
  
      function getValues() {
        return data;
      }
    }
  
    function e(type, ...content) {
      const el = document.createElement(type);
  
      content.forEach(con => {
        if (typeof con == 'string') {
          const node = document.createTextNode(con);
          el.appendChild(node);
  
        } else {
          el.appendChild(con);
        }
      });
  
      return el;
    }
  }
  
  /*
  function solve() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
  
    buttons[0].addEventListener('click', function (e) {
      const items = JSON.parse(textareas[0].value)
        .forEach(item => {
          const trElement = createEl('tr');
  
          const tdImage = createEl('td');
          const imgElement = createEl('img', { src: item.img });
          tdImage.appendChild(imgElement);
          trElement.appendChild(tdImage);
  
          const tdName = createEl('td');
          const pName = createEl('p', '', item.name);
          tdName.appendChild(pName);
          trElement.appendChild(tdName);
  
          const tdPrice = createEl('td');
          const pPrice = createEl('p', '', item.price);
          tdPrice.appendChild(pPrice);
          trElement.appendChild(tdPrice);
  
          const tdFact = createEl('td');
          const pFact = createEl('p', '', item.decFactor);
          tdFact.appendChild(pFact);
          trElement.appendChild(tdFact);
  
          const tdCheck = createEl('td');
          const inputCheck = createEl('input', { type: 'checkbox' });
          tdCheck.appendChild(inputCheck);
          trElement.appendChild(tdCheck);
  
          document.querySelector('tbody').appendChild(trElement);
        });
    })
  
    buttons[1].addEventListener('click', function (e) {
      const bought = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));
      const result = { names: [], price: 0, factor: 0, };
  
      if (bought.length > 0) {
        bought.forEach(check => {
          const item = check.parentNode.parentNode;
          result.names.push(item.children[1].textContent);
          result.price += Number(item.children[2].textContent);
          result.factor += Number(item.children[3].textContent);
        });
      }
      textareas[1].value = `Bought furniture: ${result.names.join(', ')}\nTotal price: ${result.price.toFixed(2)}\nAverage decoration factor: ${result.factor / bought.length}`;
    })
  
    function createEl(type, attributes, content) {
      const element = document.createElement(type);
      element.textContent = content;
  
      for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
      return element;
    }
  }
  */