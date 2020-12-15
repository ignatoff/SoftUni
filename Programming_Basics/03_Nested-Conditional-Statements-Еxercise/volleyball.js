function volleyball(year, holidays, trips) {

    holidays = Number(holidays);
    trips = Number(trips);

    let playHoliday = 2 / 3 * holidays;
    let sofiaPlay = (48 - trips) * 0.75;
    let allGames = playHoliday + sofiaPlay + trips;

    switch (year) {
        case "leap": allGames *= 1.15;
            console.log(Math.floor(allGames)); break;
        default:
            console.log(Math.floor(allGames)); break;

    }
}

volleyball("leap", "2", "3");
