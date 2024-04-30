// const buttonClick = require('./button');
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();

abstract class Department {
	static fiscalYear = 2024;
	// private readonly id: string;
	// private name: string;
	// private employees: string[] = [];
	protected employees: string[] = [];	// accessible only to derived classes

	constructor(protected readonly id: string, public name: string) {
		// this.name = n;
		// console.log(this.fiscalYear);  // <= WRONG!! static properties are accessed using the class name, 'Department'
		console.log(Department.fiscalYear); // <= CORRECT!!
	}

	static createEmployee(name: string) {
		return { name: name };
	}

	// describe(this: Department): void {
	// console.log(`Department:\t\t\t(${this.id}):\t${this.name}`);
	// }

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(`No. of Employees:\t${this.employees.length}`);
		// console.log(this.employees);
		console.table(this.employees);
	}
}

class ITDepartment extends Department {
	// admins: string[];

	constructor(id: string, public admins: string[]) {
		super(id, 'IT');
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
	private lastReport: string;
	private static instance: AccountingDepartment;

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found.');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value!');
		}
		this.addReport(value);
	}

	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
		// this.lastReport = reports[reports.length - 1];
		this.lastReport = reports[0];
	}

	static getInstance() {	// Singleton pattern
		if (this.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment('d2', []);	// this is the only place where we can create a new instance of this class name {
		return this.instance;
	}

	describe(): void {
		console.log(`Accounting Department — ID:\t\t${this.name}:\t(${this.id})`);
	}

	addEmployee(name: string) {
		if (name === 'Jasper') {
			return;
		}
		this.employees.push(name);
	}

	printEmployeeInformation(): void {
		console.log(`No. of Employees:\t${this.employees.length}`);
		console.log(this.employees);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}
}

// const accounting = new AccountingDepartment('d1', ['acctgRpt1', 'acctgRpt2', 'acctgRpt3']);  // <= OLD WAY, before Singleton pattern
const accounting = AccountingDepartment.getInstance(); // <= NEW WAY, using Singleton pattern, private constructor & static getInstance() method.
const accounting2 = AccountingDepartment.getInstance(); // <= NEW WAY, using Singleton pattern, private constructor & static getInstance() method.

console.log(accounting, accounting2);
console.log(`Are accounting and accounting2 the same?: ${accounting === accounting2}`);

accounting.addEmployee('Max');
accounting.addEmployee('Faddah');
accounting.addEmployee('Darcy');
accounting.addEmployee('Iris');
accounting.addEmployee('Casey');
accounting.addEmployee('Jasper');

// accounting.employees[6] = 'Allison'; // prevented from happening by using `protected` keyword on line 5 above.

console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

console.log(it);
it.describe();
console.table(it.admins);

accounting.addReport('Uh-oh, something went wrong...!');
// accounting.mostRecentReport = ''; // will throw an Error as an empty string is falsey
accounting.mostRecentReport = 'acctgRpt5';
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.describe();


// const accountingCopy = { name: "accountingCopy", describe: accounting.describe };

// accountingCopy.describe();

