"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HNB = void 0;
const bank_1 = require("./bank");
class HNB extends bank_1.Bank {
    constructor() {
        super();
    }
    interest() {
        return this.deposit * 0.073;
    }
}
exports.HNB = HNB;
//# sourceMappingURL=HNB.js.map