"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
function main() {
    const student1 = new student_1.student("Dexter samuel", 14, "Eravur");
    console.log(student1.getStudentName());
    const student2 = new student_1.student("Raajavel.ms", 17, "Mamsapuram");
    console.log(student2.getStudentDistrict());
    console.log(student1.getStudentDistrict() + " is " + student1.getStudentName() + "'s native");
    console.log(student2.getStudentName() + " is from " + student2.getStudentDistrict());
    console.log(student1.getStudentAge());
    student1.setStudentName("Mallesh kannan");
    console.log(student1.getStudentDistrict() + " is " + student1.getStudentName() + "'s native");
}
main();
//# sourceMappingURL=index.js.map