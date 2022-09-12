// behaves much like type aliases
// can use them to create reusable, modular types that describe the shapes of objects and only OBJECTS
interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 123, y: 456 };

// optional fields just add a question mark like type aliases
// readonly fields are specified as readonly
// interface Person {
//     readonly id: number;
//     first: string;
//     last: string;
//     nickname?: string;
// }

// interface methods
interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    // sayHi is a method that accepts 0 arguments and returns a string
    // different syntax alternatives allowed
    // sayHi: (name: string) => string;
    sayHi(): string;
}

const ethan: Person = {
    id: 1235,
    first: "Ethan",
    last: "Cho",
    nickname: "Echo",
    sayHi() {
        return "Hello";
    },
};

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Shoes",
    price: 100,
    applyDiscount(discount) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    },
};

// re-opening interfaces to add new properties/methods
// pretend this Dog interface is coming from a different file and in this file we wanted to keep the same Dog but add additional things onto the interface
interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

// at this point in the program the interface Dog expects any dog object to include a breed property and a bark method so this will error out even though the Dog interface was declared initially with name and age properties only
// const elton: Dog = {
//     name: "Elton",
//     age: .5
// }

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "woof";
    },
};

// extend interfaces, inheritted interfaces
interface ServiceDog extends Dog {
    // union type
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Labrador",
    bark() {
        return "bark";
    },
    job: "guide dog",
};

// interface extends multiple interfaces
interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const myEngineer: Engineer = {
    id: 123,
    name: "engineer",
    email: "engineer@me.com",
    level: "senior",
    languages: ["javascript", "python", "java"]
}