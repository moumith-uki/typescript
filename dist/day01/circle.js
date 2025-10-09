"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    Cradius;
    constructor(radius) {
        this.Cradius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.Cradius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.Cradius;
    }
    setRadius(radius) {
        this.Cradius = radius;
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map