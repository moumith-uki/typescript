"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Boy_1 = require("./day02/polymorphism/Boy");
const bank_1 = require("./day02/polymorphism/bank");
const BOC_1 = require("./day02/polymorphism/BOC");
const People_s_1 = require("./day02/polymorphism/People's");
const HNB_1 = require("./day02/polymorphism/HNB");
function main() {
    const obj = new Boy_1.Boy();
    obj.eat();
}
main();
function main2() {
    const bankObj = new bank_1.Bank();
    const bocObj = new BOC_1.BOC();
    const hnbObj = new HNB_1.HNB();
    const peoplesObj = new People_s_1.Peoples();
    console.log("How much I'll get If I deposit " + bankObj.deposit + " in each bank.");
    console.log("I will get " + bankObj.interest() + " in general");
    console.log("I will get " + bocObj.interest() + " in BOC");
    console.log("I will get " + hnbObj.interest() + " in HNB");
    console.log("I will get " + peoplesObj.interest() + " in People's bank");
}
main2();
//# sourceMappingURL=index.js.map