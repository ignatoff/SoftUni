function create(words) {
   const output = document.getElementById('content');

   words.forEach(word => output.append(createSection(word)));

   function createSection(text) {
      const pElement = create('p', text);
      pElement.style.display = 'none';
      
      const divElement = create('div', pElement);
      divElement.addEventListener('click', function () {
         pElement.style.display = '';
      });

      return divElement;
   }

   function create(type, content) {
      const el = document.createElement(type);

      if (typeof content == 'string') {
         el.textContent = content;
      } else {
         el.appendChild(content);
      }

      return el;
   }
}

/*function create(words) {
   const content = document.getElementById('content');

   words.forEach(text => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.textContent = text;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);
      content.appendChild(divElement);
   });

   content.addEventListener('click', function (e) {

      if (e.target.tagName === 'DIV') {
         e.target.children[0].style.display = 'block';
      }
   })
}
*/

