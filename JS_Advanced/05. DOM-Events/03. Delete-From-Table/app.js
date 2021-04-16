function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const result = document.getElementById('result');

    rows.filter(row => {

        if (row.lastElementChild.textContent == input.value) {
            row.remove();
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    })

    /*for (const row of rows) {
        
        if (row.textContent.includes(input.value) && input.value != '') {
            row.remove();
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    }*/
    input.value = '';
}