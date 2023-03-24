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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("Secret method!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set newScore(score) {
        if (score > 0) {
            this._score = score;
        }
        else {
            throw new Error("Score cannot be negative");
        }
    }
    set firstName(firstName) {
        this.first = firstName;
    }
    set lastName(lastName) {
        this.last = lastName;
    }
}
// Protected
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
}
