function birthdayParty(rent) {

    rent = Number(rent);

    let cake = rent * 0.2;
    let drinks = cake * 0.55;
    let animator = rent / 3;

    let total = rent + cake + drinks + animator;

    console.log(total);

}

birthdayParty("2250");