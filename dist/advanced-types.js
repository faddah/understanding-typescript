console.log(`it's advanced TS feature time, bay-bee!`);
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();
const paragraph = document.querySelector('p');
const paraById = document.getElementById('message-output');
const userInputElement = document.getElementById('user-input');
const e1 = {
    name: "Faddah",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.table(e1);
const e2 = {
    name: "Faddah",
    privileges: ["super-admin"],
    startDate: new Date(),
};
console.table(e2);
let uni;
function add(a, b) {
    return (typeof a === "string" || typeof b === "string") ? a.toString() + b.toString() : a + b;
}
const result = add(5, 3);
console.log(result);
const result2 = add('Faddah', ' Wolf');
console.log(result2.split(' '));
const fetchedUserData = {
    id: "u1",
    name: "Faddah",
    job: { title: "CEO", description: "EatMeBumCo" }
};
console.log(`Job Title: ${fetchedUserData?.job?.title}`);
const theInput = '';
const storedData = theInput ?? 'DEFAULT';
console.log(`The Input: ${storedData}`);
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ("privileges" in emp)
        console.log(`Privileges: ${emp.privileges}`);
    if ("startDate" in emp)
        console.log(`Start Date: ${emp.startDate}`);
}
const e3 = {
    name: "Faddah",
    privileges: ["super-admin"],
    startDate: new Date(),
};
printEmployeeInformation(e1);
printEmployeeInformation(e3);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log(`Loading cargo...${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(`The ${animal.type} is moving at a speed of ${speed} kph.`);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
if (userInputElement)
    userInputElement.value = "Hi there!";
const outputInput = () => {
    userInputElement.addEventListener('keyup', (event) => {
        userInputElement.value ? paragraph.textContent = userInputElement.value : paragraph.textContent = "";
    });
};
outputInput();
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
//# sourceMappingURL=advanced-types.js.map