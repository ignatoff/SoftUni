function charityCampaign(days, confectioners, cakes, waffles, pancakes) {

    days = Number(days);
    confectioners = Number(confectioners);
    cakes = Number(cakes) * 45;
    waffles = Number(waffles) * 5.8;
    pancakes = Number(pancakes) * 3.2;

    let workPerDay = confectioners * (cakes + waffles + pancakes);
    let campaign = days * workPerDay;
    let final = campaign * 7 / 8;

    console.log(final);

}

charityCampaign("23", "8", "14", "30", "16");
