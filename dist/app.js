console.log("it's advanced TS feature time, bay-bee!");
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();
var e1 = {
    name: "Faddah",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.table(e1);
var e2 = {
    name: "Faddah",
    privileges: ["super-admin"],
    startDate: new Date(),
};
console.table(e2);
var uni;
function add(a, b) {
    return (typeof a === "string" || typeof b === "string") ? a.toString() + b.toString() : a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: ".concat(emp.name));
    if ("privileges" in emp)
        console.log("Privileges: ".concat(emp.privileges));
    if ("startDate" in emp)
        console.log("Start Date: ".concat(emp.startDate));
}
var e3 = {
    name: "Faddah",
    privileges: ["super-admin"],
    startDate: new Date(),
};
printEmployeeInformation(e1);
printEmployeeInformation(e3);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo... ".concat(amount));
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=app.js.map