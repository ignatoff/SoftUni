function extract(content) {

    const text = document.getElementById(content).textContent;
    const sample = /\((.+?)\)/g;
    let match = sample.exec(text);
    const result = [];

    while(match) {
        result.push(match[1]);
        match = sample.exec(text);
    }

    return result.join('; ')
}