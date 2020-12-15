function personalTitles(age, gender) {

    age = Number(age);

    if (gender === "m") {
        if (age >= 16) {
            console.log("Mr.")
        } else {
            console.log("Master");

        }
    }

    if (gender === "f") {
        if (age >= 16) {
            console.log("Ms.")
        } else {
            console.log("Miss");

        }
    }
}

personalTitles("12", "f");