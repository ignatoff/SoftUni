function salary(tabs) {

    let income = Number(tabs[1]);
    let fb = 0;
    let ins = 0;
    let re = 0;

    for (let i = 2; i < tabs.length; i++) {

        switch (tabs[i]) {
            case "Facebook": fb++; break;
            case "Instagram": ins++; break;
            case "Reddit": re++; break;
        }
    }

    let fineFB = fb * 150;
    let fineINS = ins * 100;
    let fineRE = re * 50;
    let sumFine = fineFB + fineINS + fineRE;
    let total = (income - sumFine);

    if (total > 0) {
        console.log(total);

    } else {
        console.log(`You have lost your salary.`);

    }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
