"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
class student {
    sName;
    sAge;
    sDistrict;
    constructor(sName, sAge, sDistrict) {
        this.sName = sName;
        this.sAge = sAge;
        this.sDistrict = sDistrict;
    }
    setStudentName(name) {
        this.sName = name;
    }
    setStudentAge(age) {
        this.sAge = age;
    }
    setStudentDistrict(district) {
        this.sDistrict = district;
    }
    getStudentName() {
        return this.sName;
    }
    getStudentAge() {
        return this.sAge;
    }
    getStudentDistrict() {
        return this.sDistrict;
    }
}
exports.student = student;
//# sourceMappingURL=student.js.map