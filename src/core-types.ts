// const person: {
// 	name: string;
// 	age: number;
// }

// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];	// This is an example of a Tuple
// } = {
// 	name: 'Faddah',
// 	age: 63,
// 	hobbies: ['Bread Baking', 'Cooking', 'Window Sill Herb Gardening'],
// 	role: [1, 'Funky Cold Medina'] // Tuple example
// };

// const ADMIN = 0;
// const READ_ONLY = 1;   // This is an example of Enums
// const AUTHOR = 2;

enum Role { ADMIN = 10, READ_ONLY = 20, AUTHOR = 30 };

const person = {
	name: 'Faddah',
	age: 63,
	hobbies: ['Bread Baking', 'Cooking', 'Window Sill Herb Gardening'],
	role: Role.ADMIN,
};

// person.role.push('admin'); // js/ts does not catch this error... yet
// person.role[1] = 10; // Error: Type '10' is not assignable to type 'string'.

// person.role = [0, 'user', 'admin']; // This WILL give an Error: Type '[number, string, string]' is not assignable to type '[number, string]'.

console.log(`Role: ${person.role}`);

person.role === 10 ? console.log('is ADMIN') : console.log('NOT ADMIN');


// let favoriteActivities: string[];  // This is an example of a string array
let favoriteActivities: any[];	// This is an example of an 'any' type array
// favoriteActivities = ['Ultimate Frisbee', '69', 'noice'];
favoriteActivities = ['Ultimate Frisbee', 69, 'noice'];

for (const hobby of person.hobbies) {
	console.log(`•\t${hobby.toUpperCase()}`);
	// console.log(hobby.map()); // Error: Property 'map' does not exist on type 'string'.
}

const list: HTMLUListElement = document.createElement('ul');
for (const hobby of person.hobbies) {
	const listItem = document.createElement('li');
	listItem.textContent = `\t\t${hobby.toUpperCase()}`;
	list.appendChild(listItem);
}

// eslint-disable-next-line 
const displayDiv: HTMLDivElement = document.querySelector('#resultDiv')!;
console.log(person);
// console.log(person.nickname);\

displayDiv.innerHTML = `<h2>${person.name} is ${person.age} years old.</h2>`;
displayDiv.append(list);

