function vacationBookList(numPages, pagesPerHour, days) {

    numPages = Number(numPages);
    pagesPerHour = Number(pagesPerHour);
    days = Number(days);

    let hours = numPages / pagesPerHour;
    let timeNeeded = hours / days;

    console.log(timeNeeded);

}

vacationBookList("432", "15", "4");
