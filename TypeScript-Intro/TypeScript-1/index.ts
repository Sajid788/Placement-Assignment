// Numeric Types
const age: number = 25;
const largeNumber: number = 9007199254740991; 

// String Type
const userName: string = "John Doe"; 

// Boolean Type
const isStudent: boolean = true;

// Array Types
const scores: number[] = [85, 90, 95];
const colors: string[] = ["red", "green", "blue"];
const answers: boolean[] = [true, false, true];

// Tuple Type
const person: [string, number] = ["Alice", 30];

// Enum Type
enum Direction {
    North,
    East,
    South,
    West,
}
const currentDirection: Direction = Direction.North;

// Any Type
let randomValue: any = "Hello";

// Void Type
function logMessage(message: string): void {
    console.log(message);
}

// Null and Undefined Types
const emptyValue: null = null;
const notAssigned: undefined = undefined;

// Function Declarations
function calculateSum(a: number, b: number): number {
    return a + b;
}

function greetUser(name: string): string {
    return `Hello, ${name}!`;
}

// Object Types
// Interface
interface User {
    id: number;
    name: string;
    email: string;
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
};

// Type Alias
type Point = {
    x: number;
    y: number;
};

const point: Point = {
    x: 10,
    y: 20,
};

// Testing the Code
logMessage("This is a TypeScript assignment.");
console.log("Sum:", calculateSum(10, 20));
console.log(greetUser("Alice"));
console.log("User:", user);
console.log("Point:", point);
console.log("Age:", age);
console.log("Large Number:", largeNumber);
console.log("Scores:", scores);
console.log("Current Direction:", Direction[currentDirection]);
