function sortByTwo(array) {
    
    array.sort(checkSort);

    function checkSort(a, b) {
        
        if (a.length > b.length) return 1;
        else if (a.length < b.length) return -1;
        else return a.localeCompare(b);
    }
    return array.join('\n');
}

console.log(sortByTwo(["alpha", "beta", "aaamma", "acdfe"]));
