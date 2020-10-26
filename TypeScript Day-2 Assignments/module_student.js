"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.assign_data = function (roll_no, name, phnno) {
        this.roll_no = roll_no;
        this.name = name;
        this.phnno = phnno;
    };
    Student.prototype.display = function () { console.log("Roll_no : " + this.roll_no + "     name: " + this.name + "    Phone No : " + this.phnno); };
    return Student;
}());
var Obj = new Student();
Obj.assign_data(1, "Sowmya", 7896542365);
Obj.display();
