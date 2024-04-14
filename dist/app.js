"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`Department:\t${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`No. of Employees: ${this.employees.length}`);
        console.table(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Faddah');
accounting.addEmployee('Darcy');
accounting.addEmployee('Iris');
accounting.addEmployee('Casey');
accounting.employees[2] = 'Allison';
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map