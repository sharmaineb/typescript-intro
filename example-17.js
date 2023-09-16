// Giant Robot class
// Create a class for Kaiju that implements the Robot interface
var Kaiju = /** @class */ (function () {
    function Kaiju(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    // Implement the describe method for Kaiju
    Kaiju.prototype.describe = function () {
        console.log("name: ".concat(this.name, " type: ").concat(this.type, " power: ").concat(this.power));
    };
    return Kaiju;
}());
// Example usage:
var kaiju = new Kaiju("Godzilla", 10000, "Monster");
kaiju.describe();
