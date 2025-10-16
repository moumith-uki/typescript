import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
console.log("Circle Example");
const c1 = new Circle(8, "blue", true);
c1.printCircle();
console.log("Area:", c1.getArea().toFixed(2));
console.log("Perimeter:", c1.getPerimeter().toFixed(2));
console.log(c1.toString());
console.log("\nRectangle Example");
const r1 = new Rectangle(21, 9, "red", false);
console.log("Area:", r1.getArea());
console.log("Perimeter:", r1.getPerimeter());
console.log(r1.toString());

 