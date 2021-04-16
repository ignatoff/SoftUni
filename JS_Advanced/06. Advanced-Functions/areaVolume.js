function solve(area, vol, input) {
    const result = [];
    const list = JSON.parse(input)
        .forEach(el => {
            const rectA = area.bind(el);
            const rectV = vol.bind(el);
            result.push({ area: rectA(), volume: rectV() })
        });

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]
    `));

