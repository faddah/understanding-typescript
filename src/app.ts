class Department {
	name: string;
	private employees: string[] = [];

	constructor(n: string) {
		this.name = n;
	}

	describe(this: Department) {
		console.log(`Department:\t${this.name}`);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(`No. of Employees: ${this.employees.length}`);
		// console.log(this.employees);
		console.table(this.employees);
	}
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Faddah');
accounting.addEmployee('Darcy');
accounting.addEmployee('Iris');
accounting.addEmployee('Casey');

// accounting.employees[2] = 'Allison';

console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "accountingCopy", describe: accounting.describe };

// accountingCopy.describe();

