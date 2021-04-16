function validate() {
    const input = document.getElementById('email');
    const sample = /^([a-z]+)@([a-z]+).([a-z]+)$/g;

    input.addEventListener('change', (e) => {

        if (!sample.test(input.value)) {
            input.classList.add('error');
        } else {
            input.removeAttribute('class');
        }
    });    
}