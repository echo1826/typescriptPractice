class Player {
    // intialize properties first to be declared in the constructor
    readonly first: string; // can determine properties to be non-mutable by having it as readonly
    readonly last: string;

    // class variables
    score: number = 0;
    // typescript can implicitly decide the type on intialization
    numLives = 10;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}
