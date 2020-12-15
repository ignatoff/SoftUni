function firm(neededHours, days, employees) {

    neededHours = Number(neededHours);
    days = Number(days);
    employees = Number(employees);

    let workDays = days * 0.9;
    let hours = workDays * 8;
    let extraHours = employees * days * 2;
    let projectHours = Math.floor(hours + extraHours);
    let final = Math.abs(projectHours - neededHours);

    if (projectHours < neededHours) {
        console.log(`Not enough time!${final} hours needed.`);
    } else {
        console.log(`Yes!${final} hours left.`);
    }
}

firm("99", "3", "1");