// Primitive: number, string, boolean
// More complex type: arrays, objects
// Function types, parameters

// Primitives


let age: number = 13;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

let hobies: null;

hobies= null;

type Person = {
    name: string;
    age: number;
}

let person: Person


person = {
    name: 'Max',
    age: 32,
}

let people : Person[];

// Type inference

let course: string | number   = 'React - The Complete Guide';

course = 1223;

// Function & types


function add(a: number, b: number): number | string {
    return a + b;
}

function print(value: any) {
    console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];

    return newArray;
}

const demoArray  = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1)
const stringArray = insertAtBeginning(['d', 'd','d'], '-1')
