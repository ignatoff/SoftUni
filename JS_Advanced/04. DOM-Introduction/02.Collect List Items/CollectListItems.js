function extractText() {
    const list = document.getElementsByTagName('li');
    const result = Array.from(list).map(x => x.textContent);
    const input = document.getElementById('result');
    input.value = result.join('\n');
}