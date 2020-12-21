function charInRange(a, b) {

    let start = Math.min(a.charCodeAt(), b.charCodeAt());
    let end = Math.max(a.charCodeAt(), b.charCodeAt());
    let line = '';

    for (let i = start + 1; i < end; i++) {
        line += String.fromCharCode(i) + ' ';
    }
    return line;
}

console.log(charInRange('#', ':'));
