function systemsReg(array) {

    let list = [];

    array.forEach(el => {
        let obj = {};
        let [system, component, subComponent] = el.split(' | ');
        obj.system = system;
        obj.component = component;
        obj.subComponent = subComponent;
        list.push(obj);
    });
    
    list.sort((a, b) => b.component - a.component || a.component.localeCompare(b.component));        
}

function systemsReg(array) {

    let list = {};

    array.forEach(el => {
        let [system, component, subComponent] = el.split(' | ');

        if (!list.hasOwnProperty(system)) {
            list[system] = {};
        }

        if (!list[system].hasOwnProperty(component)) {
            list[system][component] = [];
        }
        list[system][component].push(subComponent);
    });
    let sortedSys = Object.keys(list).sort((a, b) =>
    Object.keys(list[b]).length - Object.keys(list[a]).length || a.localeCompare(b));
    console.log(sortedSys);
    

    for (const key of sortedSys) {
        console.log(key);
        let sortedComp = Object.keys(list[key]).sort((a, b) =>
        Object.keys(list[key][b]).length - Object.keys(list[key][a]).length);

        for (const comp of sortedComp) {
            console.log(`|||${comp}`);
            
            for (const sub of list[key][comp]) {
            console.log(`||||||${sub}`);                
            }
        }
    }
}

systemsReg([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);