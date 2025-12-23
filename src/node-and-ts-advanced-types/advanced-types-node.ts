/// <reference path="./types.d.ts" />
// // ============================================
// // 1. TYPE GUARDS
// // ============================================

// // User-defined type guard
// function isString(value: unknown): value is string {
//     return typeof value === 'string';
// }

// // Type guard for object shape
// interface Dog {
//     bark: () => void;
//     breed: string;
// }

// interface Cat {
//     meow: () => void;
//     color: string;
// }

// function isDog(pet: Dog | Cat): pet is Dog {
//     return (pet as Dog).bark !== undefined;
// }

// // Using type guards
// function handlePet(pet: Dog | Cat) {
//     if (isDog(pet)) {
//         console.log(`Dog breed: ${pet.breed}`);
//         pet.bark();
//     } else {
//         console.log(`Cat color: ${pet.color}`);
//         pet.meow();
//     }
// }

// const myDog: Dog = {
//     bark: () => console.log('Woof!'),
//     breed: 'Labrador'
// };

// const myCat: Cat = {
//     meow: () => console.log('Meow!'),
//     color: 'Orange'
// };

// console.log('=== TYPE GUARDS ===');
// handlePet(myDog);
// handlePet(myCat);

// // ============================================
// // 2. UNION TYPES
// // ============================================

// type Status = 'success' | 'error' | 'loading';
// type ID = string | number;

// function formatID(id: ID): string {
//     if (typeof id === 'string') {
//         return id.toUpperCase();
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

// // ============================================
// // 3. INTERSECTION TYPES
// // ============================================

// interface Person {
//     name: string;
//     age: number;
// }

// interface Employee {
//     employeeId: number;
//     department: string;
// }

// type Staff = Person & Employee;

// const employee: Staff = {
//     name: 'Alice Johnson',
//     age: 30,
//     employeeId: 1001,
//     department: 'Engineering'
// };

// function printEmployee(staff: Staff) {
//     console.log(`${staff.name} (${staff.age}) - ${staff.department} #${staff.employeeId}`);
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
//     createdAt: new Date('2024-01-01'),
//     updatedAt: new Date('2024-12-01')
// };

// console.log(`Product: ${product.name}, Updated: ${product.updatedAt.toLocaleDateString()}`);

// // ============================================
// // 4. TYPE ASSERTIONS
// // ============================================

// // Basic type assertion
// const userInput: unknown = 'Hello TypeScript';
// const strLength = (userInput as string).length;
// console.log('\n=== TYPE ASSERTIONS ===');
// console.log(`String length: ${strLength}`);

// // Assertion with DOM (simulated)
// interface HTMLElement {
//     value?: string;
//     textContent?: string;
// }

// function simulateDOM(): HTMLElement {
//     return { value: 'Input text' };
// }

// const input = simulateDOM() as HTMLElement;
// console.log(`Input value: ${input.value}`);

// // Double assertion (use sparingly)
// const data: unknown = { x: 10, y: 20 };
// type Point = { x: number; y: number };
// const point = data as unknown as Point;
// console.log(`Point: (${point.x}, ${point.y})`);

// // Non-null assertion
// function processValue(val: string | null) {
//   // We know it's not null in this context
//     return val!.toUpperCase();
// }

// console.log(processValue('typescript'));

// // ============================================
// // 5. UTILITY TYPES
// // ============================================

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
// type Role = 'admin' | 'user' | 'guest';
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

// // ============================================
// // 6. DECLARATION MERGING
// // ============================================

// console.log('\n=== DECLARATION MERGING ===');

// // Interface merging
// interface Box {
//     height: number;
//     width: number;
// }

// interface Box {
//     depth: number;
// }

// // Box now has height, width, and depth
// const box: Box = {
//     height: 10,
//     width: 20,
//     depth: 15
// };
// console.log('Box dimensions:', box);

// // Namespace merging
// namespace MathUtils {
//     export function add(a: number, b: number): number {
//         return a + b;
//     }
// }

// namespace MathUtils {
//     export function multiply(a: number, b: number): number {
//         return a * b;
//     }
// }

// console.log('5 + 3 =', MathUtils.add(5, 3));
// console.log('5 * 3 =', MathUtils.multiply(5, 3));

// // Augmenting global interfaces (example)
// interface String {
//     customMethod?: () => string;
// }

// String.prototype.customMethod = function() {
//     return `Custom: ${this}`;
// };

// const str = 'Hello';
// console.log('Custom method:', (str as any).customMethod());

// // ============================================
// // 7. AMBIENT DECLARATIONS
// // ============================================

//     console.log('\n=== AMBIENT DECLARATIONS ===');

// // Declare external library (simulated)
// declare const EXTERNAL_API_KEY: string;
// declare function externalLibraryFunction(param: string): void;

// declare namespace ExternalLib {
//     function initialize(config: { apiKey: string }): void;
//     function getData(): string[];
// }

// // Declare module for third-party package
// declare module 'fake-module' {
//     export function doSomething(value: number): string;
//     export interface Options {
//         verbose: boolean;
//     }
// }

// // Using ambient declarations
// console.log('Ambient declarations are type-only and provide intellisense');
// console.log('They tell TypeScript about code that exists elsewhere');

// // ============================================
// // 8. TRIPLE-SLASH DIRECTIVES
// // ============================================

// console.log('\n=== TRIPLE-SLASH DIRECTIVES ===');

// // Triple-slash directives are comments at the top of files
// // They're used for:

// // 1. Reference to other declaration files
// /// <reference path="./types.d.ts" />

// // 2. Type dependencies
// /// <reference types="node" />

// // 3. Library directives
// /// <reference lib="es2015" />

// // 4. No default lib
// /// <reference no-default-lib="true"/>

// console.log('Triple-slash directives examples:');
// console.log('/// <reference path="./types.d.ts" /> - Reference declaration files');
// console.log('/// <reference types="node" /> - Include type definitions');
// console.log('/// <reference lib="es2015" /> - Include built-in lib');

// // Practical example: they enable intellisense for global types
// // For Node.js built-ins like process, Buffer, etc.

// console.log('\n=== ALL EXAMPLES COMPLETE ===');