function calorie(array) {
    
    let result = {};
    for (let i = 0; i < array.length; i += 2) {
        const key = array[i];
        const value = Number(array[i + 1]);
        result[key] = value;
    }

    return result;
}

console.log(calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
