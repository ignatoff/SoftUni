function reception(array) {
    
    let [empl1, empl2, empl3, students] = array.map(Number);
    let help = empl1 + empl2 + empl3;
    let hours = 0;

    while (students > 0) {
        hours++;

        if (hours % 4 != 0) students -= help;
    }
    console.log(`Time needed: ${hours}h.`);    
}

reception(['5','6','4','20']);
reception(['1','2','3','45']);
reception(['3','2','5','40']);
reception(['1','1','1','0']);
reception(['1','1','1','10000']);
reception(['100','100','100','10000']);