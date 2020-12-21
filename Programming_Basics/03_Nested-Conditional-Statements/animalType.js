function animalType(type) {

    switch (type) {
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile"); break
        case "dog": console.log("mammal"); break
        default: console.log("unknown");

    }
}

animalType("dog");