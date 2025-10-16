"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const geomatric_1 = require("./geomatric");
class Circle extends geomatric_1.Geometric {
    radius;
    constructor(radius = 3, color, filled) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this, radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    printCircle() {
        console.log("Circle radius is :" + this.radius);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map