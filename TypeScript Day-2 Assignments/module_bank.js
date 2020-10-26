"use strict";
exports.__esModule = true;
var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.assign_data = function (acct_no, name, balance) {
        this.acct_no = acct_no;
        this.name = name;
        this.balance = balance;
    };
    Bank.prototype.display = function () { console.log("Acct_no : " + this.acct_no + "     name: " + this.name + "    Balance : " + this.balance); };
    return Bank;
}());
var bankObj = new Bank();
bankObj.assign_data(101, "Chiranjeevi", 50000);
bankObj.display();
