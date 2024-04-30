var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log("No. of Employees:\t".concat(this.employees.length));
        console.table(this.employees);
    };
    Department.fiscalYear = 2024;
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department \u2014 ID:\t\t".concat(this.name, ":\t(").concat(this.id, ")"));
    };
    return ITDepartment;
}(Department));
var employee1 = Department.createEmployee('Floobie');
console.log(employee1);
var it = new ITDepartment('d2', ['Max', 'Faddah']);
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department \u2014 ID:\t\t".concat(this.name, ":\t(").concat(this.id, ")"));
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Jasper') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.printEmployeeInformation = function () {
        console.log("No. of Employees:\t".concat(this.employees.length));
        console.log(this.employees);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
console.log("Are accounting and accounting2 the same?: ".concat(accounting === accounting2));
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