class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {

        if (!name || !position || !department) {
            throw new Error(`Invalid input!`);
        } else if (salary <= 0) {
            throw new Error(`Invalid input!`);
        }
        const list = { name, salary, position };

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(list);
        
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDept = '';
        let avgSalary = 0;
        
        Object.entries(this.departments).forEach(([dept, emp]) => {
            let payment = 0;
            
            for (const line of emp) {
                payment += line.salary;
            }
            payment /= emp.length;
            
            if (payment > avgSalary) {
                avgSalary = payment;
                bestDept = dept;
            }
        });
        
        let result = `Best Department is: ${bestDept}\nAverage salary: ${avgSalary.toFixed(2)}\n`;

        Object.values(this.departments[bestDept])
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(emp => {
                result += `${emp.name} ${emp.salary} ${emp.position}\n`;
            });
        
        return result.trim();
    }
}

let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let act = c.bestDepartment();
let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR";
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.bestDepartment());