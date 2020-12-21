function oddOcc(str) {

    let map = new Map();
    let elements = str.toLowerCase().split(' ');

    for (const el of elements) {

        if (!map.has(el)) map.set(el, 0);

        map.set(el, map.get(el) + 1);
    }
    let filtered = Array.from(map.keys()).filter(key => map.get(key) % 2 !== 0);
    
    console.log(filtered.join(' '));
}

oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');