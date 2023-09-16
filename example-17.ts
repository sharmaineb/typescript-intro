// Giant Robot class

// Goal create an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

// Create an interface for all Robots
interface Robot {
    name: string;
    power: number;
    type: string;
}

// Create a class for Kaiju 
class Kaiju implements Robot {
    constructor(public name: string, public power: number, public type: string) {}

    // Implement the describe method for Kaiju
    describe() {
        console.log(`name: ${this.name} type: ${this.type} power: ${this.power}`);
    }
}

// Prints:
const kaiju = new Kaiju("Godzilla", 10000, "Monster");
kaiju.describe();

// name: Godzilla type: Monster power: 10000
