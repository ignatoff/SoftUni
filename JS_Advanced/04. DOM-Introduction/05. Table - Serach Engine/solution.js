function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const rows = document.querySelectorAll('tbody tr');
      const typo = document.getElementById('searchField').value.toLowerCase();

      for (const row of rows) {
         
         if (row.textContent.toLowerCase().includes(typo)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
      document.getElementById('searchField').value = '';
   }
}