"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
// bai10.ts
class Account {
    constructor(id, balance) {
        this.id = id;
        this._balance = balance;
        this.createdAt = new Date();
    }
}
exports.Account = Account;
