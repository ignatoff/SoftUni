function solve(input) {

    let index = 0;
    let wantedBook = input[index];
    index++;
    let search = input[index];
    let checkedBook = 0;

    while (search !== "No More Books") {

        if (search === wantedBook) {
            console.log(`You checked ${checkedBook} books and found it.`);
            break;
        }
        checkedBook++;
        index++;
        search = input[index];
    }

    if (search !== wantedBook) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBook} books.`);

    }

}

solve(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);
