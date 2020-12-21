function workingHours(hour, day) {

    hour = Number(hour);

    if (day === "Sunday") {
        console.log("closed");

    }

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log("open");

        }
    } else {
        console.log("closed");

    }
}

workingHours("19", "Friday");