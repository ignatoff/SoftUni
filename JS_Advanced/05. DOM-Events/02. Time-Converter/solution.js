function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.querySelector('main').addEventListener('click', function (e) {
        let num = Number(e.target.previousSibling.previousSibling.value);   
        
        if (e.target.id === 'daysBtn') {
            hours.value = 24 * num;
            minutes.value = 1440 * num;
            seconds.value = 86400 * num;

        } else if (e.target.id === 'hoursBtn') {
            days.value = num / 24;
            minutes.value = 60 * num;
            seconds.value = 3600 * num;

        } else if (e.target.id === 'minutesBtn') {
            days.value = num / 1440;
            hours.value = num / 60;
            seconds.value = 60 * num;
            
        } else if (e.target.id === 'secondsBtn') {
            days.value = num / 86400;
            hours.value = num / 3600;
            minutes.value = num / 60;
            
        }
    })
}