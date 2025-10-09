"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./day01/student");
function main() {
    const student1 = new student_1.Student("Dexter samuel", 14, "Eravur");
    console.log(student1.getStudentName());
    const student2 = new student_1.Student("Raajavel.ms", 17, "Mamsapuram");
    console.log(student2.getStudentDistrict());
    console.log(student1.getStudentDistrict() + " is " + student1.getStudentName() + "'s native");
    console.log(student2.getStudentName() + " is from " + student2.getStudentDistrict());
    console.log(student1.getStudentAge());
    student1.setStudentName("Mallesh kannan");
    console.log(student1.getStudentDistrict() + " is " + student1.getStudentName() + "'s native");
}
main();
const circle_1 = require("./day01/circle");
function main2() {
    const circle1 = new circle_1.Circle(35);
    console.log(circle1.getArea());
    console.log(circle1.getPerimeter());
    const circle2 = new circle_1.Circle(14);
    console.log(circle2.getPerimeter());
}
main2();
//# sourceMappingURL=index.js.map