"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const geomatric_1 = require("./geomatric");
class Rectangle extends geomatric_1.Geometric {
    width;
    height;
    constructor(width, height, color, filled) {
        super();
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.height * this.width;
    }
    getPerimeter() {
        return (this.height + this.width) * 2;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map