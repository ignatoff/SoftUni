function projectsCreation(arg1, arg2) {

    let name = arg1;
    let project = Number(arg2);
    let hours = project * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${project} project/s.`)

}

projectsCreation("Sanya", 9);