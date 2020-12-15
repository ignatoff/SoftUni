function maxNumber(input) {

    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let current = input[index];
    index++;

    while (current !== password) {
        current = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);

}

maxNumber(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);
