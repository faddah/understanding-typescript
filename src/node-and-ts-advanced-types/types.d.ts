// types.d.ts - Ambient type declarations

// ============================================
// GLOBAL TYPE DECLARATIONS
// ============================================

// Declare global constants that exist at runtime
declare const APP_VERSION: string;
declare const IS_PRODUCTION: boolean;

// ============================================
// GLOBAL NAMESPACE
// ============================================

declare namespace GlobalAPI {
    interface Config {
        apiUrl: string;
        timeout: number;
    }

    function init(config: Config): void;
    function fetch<T>(endpoint: string): Promise<T>;
}

// ============================================
// AUGMENT EXISTING TYPES
// ============================================

// Add custom methods to built-in types
interface Array<T> {
    firstOrDefault(): T | undefined;
    lastOrDefault(): T | undefined;
}

interface Window {
    customProperty: string;
    customMethod(): void;
}

// ============================================
// MODULE DECLARATIONS
// ============================================

// Declare types for modules without typings
declare module '*.json' {
    const value: any;
    export default value;
}

declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

// Declare a third-party library
declare module 'legacy-library' {
    export function legacyFunction(input: string): number;
    
    export class LegacyClass {
        constructor(options: { name: string });
        process(): void;
    }

    export interface LegacyOptions {
        debug: boolean;
        timeout: number;
    }
}

// ============================================
// EXTERNAL LIBRARY TYPES
// ============================================

declare module 'analytics-lib' {
    export interface Event {
        name: string;
        timestamp: number;
        properties?: Record<string, any>;
    }

    export function track(event: Event): void;
    export function identify(userId: string, traits?: Record<string, any>): void;
}

// ============================================
// UTILITY TYPES FOR PROJECT
// ============================================

type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type Maybe<T> = T | null | undefined;

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// ============================================
// BRANDED TYPES
// ============================================

type Brand<K, T> = K & { __brand: T };

type UserId = Brand<string, 'UserId'>;
type Email = Brand<string, 'Email'>;
type UUID = Brand<string, 'UUID'>;

// ============================================
// FUNCTION OVERLOADS
// ============================================

declare function processData(data: string): string;
declare function processData(data: number): number;
declare function processData(data: boolean): boolean;
declare function processData(data: string[]): string[];

// ============================================
// CLASS DECLARATIONS
// ============================================

declare class ExternalService {
    constructor(apiKey: string);
    
    connect(): Promise<void>;
    disconnect(): void;
    
    send(data: any): Promise<Response>;
    
    static getInstance(): ExternalService;
}

// ============================================
// ENUM-LIKE DECLARATIONS
// ============================================

declare const enum LogLevel {
    Debug = 0,
    Info = 1,
    Warning = 2,
    Error = 3
}

// ============================================
// CONDITIONAL TYPES (ADVANCED)
// ============================================

type IsString<T> = T extends string ? true : false;
type NonNullable<T> = T extends null | undefined ? never : T;
type Flatten<T> = T extends Array<infer U> ? U : T;

// ============================================
// MAPPED TYPES
// ============================================

type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Setters<T> = {
    [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
};

// ============================================
// TEMPLATE LITERAL TYPES
// ============================================

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type APIEndpoint = `/${string}`;
type HTTPRequest = `${HTTPMethod} ${APIEndpoint}`;

// ============================================
// EXPORT FOR MODULE USAGE
// ============================================

export {
    Nullable,
    Optional,
    Maybe,
    DeepPartial,
    DeepReadonly,
    UserId,
    Email,
    UUID,
    LogLevel,
    HTTPMethod,
    APIEndpoint,
    HTTPRequest
};