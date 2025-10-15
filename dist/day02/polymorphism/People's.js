"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peoples = void 0;
const bank_1 = require("./bank");
class Peoples extends bank_1.Bank {
    constructor() {
        super();
    }
    interest() {
        return this.deposit * 0.075;
    }
}
exports.Peoples = Peoples;
//# sourceMappingURL=People's.js.map