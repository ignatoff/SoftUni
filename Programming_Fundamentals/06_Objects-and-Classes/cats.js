function cats(array) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const info of array) {
        let [catName, catAge] = info.split(' ');
        let myCat = new Cat (catName, catAge);
        myCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);