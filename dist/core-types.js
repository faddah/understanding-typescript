"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["READ_ONLY"] = 20] = "READ_ONLY";
    Role[Role["AUTHOR"] = 30] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Faddah',
    age: 63,
    hobbies: ['Bread Baking', 'Cooking', 'Window Sill Herb Gardening'],
    role: Role.ADMIN,
};
console.log("Role: ".concat(person.role));
person.role === 10 ? console.log('is ADMIN') : console.log('NOT ADMIN');
var favoriteActivities;
favoriteActivities = ['Ultimate Frisbee', 69, 'noice'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("\u2022\t".concat(hobby.toUpperCase()));
}
var list = document.createElement('ul');
for (var _b = 0, _c = person.hobbies; _b < _c.length; _b++) {
    var hobby = _c[_b];
    var listItem = document.createElement('li');
    listItem.textContent = "\t\t".concat(hobby.toUpperCase());
    list.appendChild(listItem);
}
var displayDiv = document.querySelector('#resultDiv');
console.log(person);
displayDiv.innerHTML = "<h2>".concat(person.name, " is ").concat(person.age, " years old.</h2>");
displayDiv.append(list);
//# sourceMappingURL=core-types.js.map