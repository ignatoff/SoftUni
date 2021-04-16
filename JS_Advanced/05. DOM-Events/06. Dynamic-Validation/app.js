function validate() {
    document.getElementById('email').addEventListener('change', onChange);
    
    function onChange(event) {
        const input = event.target.value;
        
        if (!/^[a-z]+@[a-z]+\.[a-z]+$/.test(input)) {
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    }
}