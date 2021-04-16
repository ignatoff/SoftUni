function lockedProfile() {
    document.getElementById('main').addEventListener('click', function (e) {

        if (e.target.tagName === 'BUTTON') {
            const btn = e.target;
            const isLocked = btn.parentNode.querySelector('input[type=radio]:checked').value === 'lock';

            if (isLocked) {
                return;
            }
            const divElement = btn.parentNode.querySelector('div');
            let isVisible = divElement.style.display === 'block';
            divElement.style.display = isVisible ? 'none' : 'block';
            btn.textContent = isVisible ? 'Show more' : 'Hide it';
        }
    })
}

/*
const rbs = div.querySelectorAll('input[name="user1Locked"]');
 
if(ev.target.textContent == 'Show more'){
    if(rbs[1].checked == true){
        div.querySelector('#user1HiddenFields').style.display = 'block';
        ev.target.textContent = 'Hide it'
    }
} else {
    if(rbs[1].checked == true){
        div.querySelector('#user1HiddenFields').style.display = 'none';
        ev.target.textContent = 'Show more'
    }
}
*/