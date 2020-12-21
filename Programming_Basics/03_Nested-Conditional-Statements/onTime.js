function onTime(examHour, examMinute, arriveHour, arriveMinute) {

    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arriveHour = Number(arriveHour);
    arriveMinute = Number(arriveMinute);

    let differenceHours = Math.abs(examHour - arriveHour);
    let differenceMinutes = Math.abs(arriveMinute - examMinute);

    if (examHour == arriveHour) {
        if (examMinute < arriveMinute) {
            console.log(`Late`);
            console.log(`${differenceMinutes} minutes after the start`);

        } else if (arriveMinute == examMinute) {
            console.log(`On time`);

        } else if (examMinute > arriveMinute && differenceMinutes <= 30) {
            console.log(`On time`);
            console.log(`${differenceMinutes} minutes before the start`);

        } else {
            console.log(`Early`);
            console.log(`${differenceMinutes} minutes before the start`);
        }
    } else if (examHour < arriveHour) {
        if (examHour + 1 == arriveHour && examMinute > arriveMinute) {
            arriveMinute += 60;
            differenceMinutes = arriveMinute - examMinute;
            console.log(`Late`);
            console.log(`${differenceMinutes} minutes after the start`);

        } else if (examHour + 1 != arriveHour && examMinute > arriveMinute) {
            arriveMinute += 60;
            examHour += 1;
            differenceMinutes = arriveMinute - examMinute;
            differenceHours = arriveHour - examHour;
            if (differenceMinutes < 10) {
                console.log(`Late`);
                console.log(`${differenceHours}:0${differenceMinutes} hours after the start`);

            } else {
                console.log(`Late`);
                console.log(`${differenceHours}:${differenceMinutes} hours after the start`);

            }
        } else {
            if (differenceMinutes < 10) {
                console.log(`Late`);
                console.log(`${differenceHours}:0${differenceMinutes} hours after the start`);

            } else {
                console.log(`Late`);
                console.log(`${differenceHours}:${differenceMinutes} hours after the start`);

            }

        }
    } else {
        if (examMinute < arriveMinute) {
            examMinute += 60;
            arriveHour += 1;
            differenceHours = examHour - arriveHour;
            differenceMinutes = examMinute - arriveMinute;
            if (differenceMinutes <= 30 && examHour == arriveHour) {
                console.log(`On time`);
                console.log(`${differenceMinutes} minutes before the start`);

            } else if (differenceMinutes > 30 && examHour == arriveHour) {
                console.log(`Early`);
                console.log(`${differenceMinutes} minutes before the start`);

            } else {
                differenceHours = examHour - arriveHour;
                differenceMinutes = examMinute - arriveMinute;
                if (differenceMinutes < 10) {
                    console.log(`Early`);
                    console.log(`${differenceHours}:0${differenceMinutes} hours before the start`);

                } else {
                    console.log(`Early`);
                    console.log(`${differenceHours}:${differenceMinutes} hours before the start`);

                }
            }
        } else {
            if (differenceMinutes <= 30 && examHour == arriveHour) {
                console.log(`On time`);
                console.log(`${differenceMinutes} minutes before the start`);

            } else {
                differenceHours = examHour - arriveHour;
                differenceMinutes = examMinute - arriveMinute;
                if (differenceMinutes < 10) {
                    if (examHour != arriveHour) {
                        console.log(`Early`);
                        console.log(`${differenceHours}:0${differenceMinutes} hours before the start`);

                    } else {
                        console.log(`Early`);
                        console.log(`${differenceMinutes} minutes before the start`);

                    }
                } else {
                    console.log(`Early`);
                    console.log(`${differenceHours}:${differenceMinutes} hours before the start`);

                }
            }
        }
    }
}

onTime("11", "10", "7", "19");