"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["READ_ONLY"] = 20] = "READ_ONLY";
    Role[Role["AUTHOR"] = 30] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Faddah',
    age: 63,
    hobbies: ['Bread Baking', 'Cooking', 'Window Sill Herb Gardening'],
    role: Role.ADMIN,
};
console.log(`Role: ${person.role}`);
person.role === 10 ? console.log('is ADMIN') : console.log('NOT ADMIN');
let favoriteActivities;
favoriteActivities = ['Ultimate Frisbee', 69, 'noice'];
for (const hobby of person.hobbies) {
    console.log(`•\t${hobby.toUpperCase()}`);
}
const list = document.createElement('ul');
for (const hobby of person.hobbies) {
    const listItem = document.createElement('li');
    listItem.textContent = `\t\t${hobby.toUpperCase()}`;
    list.appendChild(listItem);
}
const displayDiv = document.querySelector('#resultDiv');
console.log(person);
displayDiv.innerHTML = `<h2>${person.name} is ${person.age} years old.</h2>`;
displayDiv.append(list);
