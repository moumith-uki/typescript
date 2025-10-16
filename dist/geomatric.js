"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometric = void 0;
class Geometric {
    color;
    filled;
    dateCreated;
    constructor(color = "white", filled = false) {
        this.color = color;
        this.filled = filled;
        this.dateCreated = new Date();
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    getDateCreted() {
        return this.dateCreated;
    }
    toString() {
        return "Color: " + this.color + " , Filled:" + this.filled + " ,Created:" + this.dateCreated.toDateString();
    }
}
exports.Geometric = Geometric;
//# sourceMappingURL=geomatric.js.map