import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`No. of Employees:\t${this.employees.length}`);
        console.table(this.employees);
    }
}
Department.fiscalYear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department — ID:\t\t${this.name}:\t(${this.id})`);
    }
}
const employee1 = Department.createEmployee('Floobie');
console.log(employee1);
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
        this.lastReport = reports[0];
    }
    static getInstance() {
        return this.instance ? this.instance : this.instance = new AccountingDepartment('d2', []);
    }
    describe() {
        console.log(`Accounting Department — ID:\t\t${this.name}:\t(${this.id})`);
    }
    addEmployee(name) {
        if (name === 'Jasper') {
            return;
        }
        this.employees.push(name);
    }
    printEmployeeInformation() {
        console.log(`No. of Employees:\t${this.employees.length}`);
        console.log(this.employees);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
console.log(`Are accounting and accounting2 the same?: ${accounting === accounting2}`);
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
accounting.describe();
//# sourceMappingURL=classes.js.map