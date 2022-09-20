interface Chicken {
    breed: string;
    eggsPerWeek: number;
    name: string;
}

const norma: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 4,
    name: "Norma",
};

// tsc --watch <file> to continuously compile any changes in whatever file was passed as an argument

// tsc command will compile any and all .ts files that it can see at it's current directory and children directories
