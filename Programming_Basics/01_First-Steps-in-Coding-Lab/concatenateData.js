function concatenateData(arg1, arg2, arg3, arg4){

    let fName = arg1;
    let lName = arg2;
    let age = Number(arg3);
    let town = arg4;
    console.log(`You are ${fName} ${lName}, a ${age}-years old person from ${town}.`)

}

concatenateData("Nikolay", "Ignatov", 32, "Ruse");