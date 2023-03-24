// class Player {
//     // intialize properties first to be declared in the constructor
//     readonly first: string; // can determine properties to be non-mutable by having it as readonly
//     readonly last: string;

//     // class variables
//     score: number = 0;
//     // typescript can implicitly decide the type on intialization
//     numLives = 10;

//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }

// }

// Parameter Properties Shorthand
// class Player {
// private score: number = 0;
// This is shorthand for doing the same as above
// constructor(public first: string, public last: string, private score: number) {}
// }

class Player {
    constructor(
        public first: string,
        public last: string,
        // private _score: number
        protected _score: number
    ) {}

    private secretMethod(): void {
        console.log("Secret method!");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set newScore(score: number) {
        if (score > 0) {
            this._score = score;
        } else {
            throw new Error("Score cannot be negative");
        }
    }

    set firstName(firstName: string) {
        this.first = firstName;
    }

    set lastName(lastName: string) {
        this.last = lastName;
    }
}
// Protected
class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        // can't access private variables even if the class is a subclass, only available in the class it was declared as private
        // setting it as a protected field allows child classes to have access to "private" variables in the parent class
        this._score = 9999999;
    }
}

// classes w/ interfaces
interface Colorful1 {
    color: string;
}

interface Printable {
    print(): void;
}

// the implements keyword allows the class to have a guideline as to what the class variables should be
class Bike implements Colorful1 {
    constructor(public color: string) {}
}

// can implement multiple interfaces
class Jacket implements Colorful1, Printable {
    constructor(public brand: string, public color: string) {}

    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Nike", "Blue");

// abstract classes (kind of like interfaces being implemented by classes)
// must be implemented by a child class, cannot instantiate from the abstract class
abstract class Employee {
    constructor(public first: string, public last: string) {}
    // define methods for the child class to have with abstract methods, the child class will define what the method will do but all child classes must have this method defined
    abstract getPay(): number;
}

// Child classes that can implement the abstract parent class
class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        first: string,
        last: string,
        private hourlyRate: number,
        private hoursWorked: number
    ) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}
