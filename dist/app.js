var _a;
console.log("it's advanced TS feature time, bay-bee!");
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();
var paragraph = document.querySelector('p');
var paraById = document.getElementById('message-output');
var userInputElement = document.getElementById('user-input');
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
var result = add(5, 3);
console.log(result);
var result2 = add('Faddah', ' Wolf');
console.log(result2.split(' '));
var fetchedUserData = {
    id: "u1",
    name: "Faddah",
    job: { title: "CEO", description: "EatMeBumCo" }
};
console.log("Job Title: ".concat((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title));
var theInput = '';
var storedData = theInput !== null && theInput !== void 0 ? theInput : 'DEFAULT';
console.log("The Input: ".concat(storedData));
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
        console.log("Loading cargo...".concat(amount));
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
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("The ".concat(animal.type, " is moving at a speed of ").concat(speed, " kph."));
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
if (userInputElement)
    userInputElement.value = "Hi there!";
var outputInput = function () {
    userInputElement.addEventListener('keyup', function (event) {
        userInputElement.value ? paragraph.textContent = userInputElement.value : paragraph.textContent = "";
    });
};
outputInput();
var errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
//# sourceMappingURL=app.js.map