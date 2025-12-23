function Log(_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result:`, result);
        return result;
    };
    
    return descriptor;
}

class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator;
calc.add(2, 4);


// // Type guard for object shape
// interface Dog {
//     bark: () => void;
//     breed: string;
// }

// interface Cat {
//     meow: () => void;
//     color: string;
// }

// function isDogTest(pet: Dog | Cat): pet is Dog {
//     return (pet as Dog).bark !== undefined;
// }

// function handlePetTest(pet: Dog | Cat) {
//     if (isDogTest(pet)) {
//         console.log(`Dog breed: ${pet.breed}`);
//         pet.bark();
//     } else {
//         console.log(`Cat color: ${pet.color}`);
//         pet.meow();
//     }
// }

// const myDogTest: Dog = {
//     bark: () => console.log('Woof!'),
//     breed: 'Labrador'
// };

// const myCatTest: Cat = {
//     meow: () => console.log('Meow!'),
//     color: 'Orange'
// };

// console.log('=== TYPE GUARDS ===');
// handlePetTest(myDogTest);
// handlePetTest(myCatTest);

// console.log(isDogTest(myDogTest)); // true
// console.log(isDogTest(myCatTest)); // false

// type Status = 'success' | 'error' | 'loading';
// type ID = string | number;

// function formatID(id: ID): string {
//     if (typeof id === 'string') {
//         return `ID-${id.toUpperCase().padStart(5, '0')}`;
//     }
//     return `ID-${id.toString().padStart(5, '0')}`;
// }

// function handleStatus(status: Status) {
//     switch (status) {
//         case 'success':
//         console.log('✓ Operation successful');
//         break;
//         case 'error':
//         console.log('✗ Operation failed');
//         break;
//         case 'loading':
//         console.log('⟳ Loading...');
//         break;
//     }
// }

// console.log('\n=== UNION TYPES ===');
// console.log(formatID('abc123')); // ABC123
// console.log(formatID(42));        // ID-00042
// handleStatus('success');
// handleStatus('error');
// handleStatus('loading');
// handleStatus('outToLunch');

// console.log('Triple-slash directives examples:');
// console.log('/// <reference path="./types.d.ts" /> - Reference declaration files');
// console.log('/// <reference types="node" /> - Include type definitions');
// console.log('/// <reference lib="es2015" /> - Include built-in lib');

// // Practical example: they enable intellisense for global types
// // For Node.js built-ins like process, Buffer, etc.

// console.log('\n=== ALL EXAMPLES COMPLETE ===');

// interface PersonTest {
//     name: string;
//     age: number;
// }

// interface Employee {
//     employeeId: number;
//     department: string;
// }

// type Staff = PersonTest & Employee;

// const employee: Staff = {
//     name: 'Alice Johnson',
//     age: 30,
//     employeeId: 1001,
//     department: 'Engineering'
// };

// function printEmployee(staff: Staff) {
//     console.log(`Employee: ${staff.name}, Age: (${staff.age}) - Dept.: ${staff.department}, ID: #${staff.employeeId}`);
// }

// console.log('\n=== INTERSECTION TYPES ===');
// printEmployee(employee);

// // Mixin pattern with intersections
// type Timestamped = {
//     createdAt: Date;
//     updatedAt: Date;
// };

// type Product = {
//     id: number;
//     name: string;
//     price: number;
// };

// type TrackedProduct = Product & Timestamped;

// const product: TrackedProduct = {
//     id: 1,
//     name: 'Laptop',
//     price: 999,
//     createdAt: new Date('2025-01-01'),
//     updatedAt: new Date('2025-12-23')
// };

// console.log(`Product: ${product.name}, Created: ${product.createdAt.toLocaleDateString()}, Updated: ${product.updatedAt.toLocaleDateString()}`);

// const userInputTest: unknown = 'Hello TypeScript';
// const strLength = (userInputTest as string).length;
// console.log('\n=== TYPE ASSERTIONS ===');
// console.log(`String length: ${strLength}`);

// // Assertion with DOM (simulated)
// interface NewHTMLElement {
//     value?: string;
//     textContent?: string;
// }

// function simulateDOM(): NewHTMLElement {
//     return { value: 'Input text' };
// }

// const input = simulateDOM() as NewHTMLElement;
// console.log(`Input value: ${input.value}`);

// // Double assertion (use sparingly)
// const data: unknown = { x: 10, y: 20 };
// type Point = { x: number; y: number };
// const point = data as unknown as Point;
// console.log(`Point: (x: ${point.x}, y: ${point.y})`);

// // Non-null assertion
// function processValue(val: string | null) {
//   // We know it's not null in this context
//     return val !== null ?  val!.toUpperCase() : 'NULL VALUE';
// }


// console.log(processValue('typescript'));
// console.log(processValue(null));

// interface String {
//     customMethod?: () => string;
// }

// String.prototype.customMethod = function() {
//     return `Custom: ${this}`;
// };

// const str = 'Hello';
// console.log('Custom method:', (str as any).customMethod());

// console.log('\n=== UTILITY TYPES ===');

// // Partial<T>
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }

// function updateUser(user: User, updates: Partial<User>): User {
//     return { ...user, ...updates };
// }

// const user: User = { id: 1, name: 'Bob', email: 'bob@example.com', age: 25 };
// console.log('User:', user);
// const updated = updateUser(user, { age: 26 });
// console.log('Updated user:', updated);

// // Pick<T, K>
// type UserPreview = Pick<User, 'id' | 'name'>;
// const preview: UserPreview = { id: 1, name: 'Bob' };
// console.log('User preview:', preview);

// // Omit<T, K>
// type UserWithoutEmail = Omit<User, 'email'>;
// const userNoEmail: UserWithoutEmail = { id: 1, name: 'Bob', age: 25 };
// console.log('User without email:', userNoEmail);

// // Record<K, T>
// type RoleTest = 'admin' | 'user' | 'guest';
// const permissions: Record<Role, string[]> = {
//     admin: ['read', 'write', 'delete'],
//     user: ['read', 'write'],
//     guest: ['read']
// };
// console.log('Admin permissions:', permissions.admin);

// // Required<T>
// interface Config {
//     host?: string;
//     port?: number;
//     ssl?: boolean;
// }

// const defaultConfig: Required<Config> = {
//     host: 'localhost',
//     port: 8080,
//     ssl: false
// };
// console.log('Default config:', defaultConfig);

// // Readonly<T>
// const immutableUser: Readonly<User> = { id: 1, name: 'Charlie', email: 'c@example.com', age: 30 };
// // immutableUser.name = 'David'; // Error: cannot assign to readonly property
// console.log('Immutable user:', immutableUser);

// // ReturnType<T>
// function createUser() {
//     return { id: 1, name: 'Eve', active: true };
// }

// type CreatedUser = ReturnType<typeof createUser>;
// const newUser: CreatedUser = { id: 2, name: 'Frank', active: false };
// console.log('New user:', newUser);

/*
||===========================================================||
||              TYPESCRIPT UTILITY RECORD<K, T>              ||
||===========================================================||
*/

// type StringToNumber = Record<string, number>;
// const scores: StringToNumber = {
//     alice: 95,
//     bob: 87,
//     charlie: 92
// };

// // Create an object with specific keys
// type TheRole = 'admin' | 'user' | 'guest';
// type ThePermissions = Record<TheRole, boolean>;
// const access: ThePermissions = {
//     admin: true,
//     user: true,
//     guest: false
// };

// // With more complex value types
// type UserInfo = Record<string, { name: string; age: number }>;
// const users: UserInfo = {
//     'user1': { name: 'Alice', age: 30 },
//     'user2': { name: 'Bob', age: 25 }
// };


