"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department:\t\t\t(${this.id}):\t${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`No. of Employees:\t${this.employees.length}`);
        console.table(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const it = new ITDepartment('d2', ['Max', 'Faddah']);
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[reports.length - 1];
    }
    addEmployee(name) {
        if (name === 'Jasper') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment('d1', ['acctgRpt1', 'acctgRpt2', 'acctgRpt3']);
accounting.addEmployee('Max');
accounting.addEmployee('Faddah');
accounting.addEmployee('Darcy');
accounting.addEmployee('Iris');
accounting.addEmployee('Casey');
accounting.addEmployee('Jasper');
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();
console.log(it);
it.describe();
console.table(it.admins);
accounting.addReport('Uh-oh, something went wrong...!');
accounting.mostRecentReport = 'acctgRpt5';
console.log(accounting.mostRecentReport);
accounting.printReports();
//# sourceMappingURL=app.js.map