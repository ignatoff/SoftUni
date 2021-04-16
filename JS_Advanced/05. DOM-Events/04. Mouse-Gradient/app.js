function attachGradientEvents() {
    document.getElementById('gradient-box').addEventListener('mousemove', move);
    const result = document.getElementById('result');

    function move(event) {
        // const distance = event.pageX - event.target.offsetLeft;
        const width = event.target.clientWidth / 100;
        result.textContent = `${Math.floor(event.offsetX / width)}%`;
    }    
}