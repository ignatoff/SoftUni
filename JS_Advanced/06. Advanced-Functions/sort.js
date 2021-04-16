function sortArray(array, arg) {
    const list = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return array.sort(list[arg]);
}

sortArray([14, 7, 17, 6, 8], 'desc');