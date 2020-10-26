var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, dept, designation) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
    }
    Employee.prototype.display = function () {
        console.log("ID: " + this.id + "    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation);
    };
    return Employee;
}());
var regular_employee = /** @class */ (function (_super) {
    __extends(regular_employee, _super);
    function regular_employee(id, name, dept, designation, salary) {
        var _this = _super.call(this, id, name, dept, designation) || this;
        _this.salary = salary;
        return _this;
    }
    regular_employee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Salary : " + this.salary);
    };
    return regular_employee;
}(Employee));
var contract_employee = /** @class */ (function (_super) {
    __extends(contract_employee, _super);
    function contract_employee(id, name, dept, designation, days, perday) {
        var _this = _super.call(this, id, name, dept, designation) || this;
        _this.days = days;
        _this.perday = perday;
        return _this;
    }
    contract_employee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Days : " + this.days + "Perday :" + this.perday);
    };
    return contract_employee;
}(Employee));
var obj = new Employee(1, "sowmya", "IT", "Technicaal Associate");
obj.display();
var obj1 = new regular_employee(2, "Keerthi", "CSE", "Technicaal Associate", 50000);
obj1.display();
var obj2 = new contract_employee(3, "Priya", "IT", "Associate", 10, 1000);
obj2.display();
