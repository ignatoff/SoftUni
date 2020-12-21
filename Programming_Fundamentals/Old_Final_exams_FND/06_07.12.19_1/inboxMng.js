function inboxMng(array) {

    let commands = {
        Add(users, userName) {
    
            if (!users.hasOwnProperty(userName)) users[userName] = [];
            else console.log(`${userName} is already registered`);    
        },
        Send(users, userName, email) {
            
            users[userName].push(email);
        },
        Delete(users, userName) {
            
            if (users.hasOwnProperty(userName)) delete users[userName];
            else console.log(`${userName} not found!`);    
        }
    }
    
    let users = {};
    let line;
    
    while ((line = array.shift()) != 'Statistics') {
        let [commName, userName, email] = line.split('->');
        command = commands[commName](users, userName, email)
    }

    console.log(`Users count: ${Object.keys(users).length}`);

    let sorted = Object.entries(users)
        .sort(compare)
        .forEach(kvp => {
            console.log(kvp[0]);
            
            for (const email of kvp[1]) {
                console.log(` - ${email}`);                
            }
        });
    
    function compare(a, b) {
        
        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    }
}

inboxMng(
    [
        'Add->Mike',
        'Add->George',
        'Send->George->Hello World',
        'Send->George->Some random test mail',
        'Send->Mike->Hello, do you want to meet up tomorrow?',
        'Send->George->It would be a pleasure',
        'Send->Mike->Another random test mail',
        'Statistics'
    ]
);

console.log(`--------------------`);

inboxMng(
    [
        'Add->Mike',
        'Add->George',
        'Send->George->Hello World',
        'Send->George->Your loan is overdue',
        'Add->Mike',
        'Send->Mike->Hello, do you want to meet up tomorrow?',
        'Delete->Peter',
        'Send->George->I\'m busy',
        'Send->Mike->Another random test mail',
        'Delete->George',
        'Statistics'
    ]
);