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
var obj = new Employee(1, "sowmya", "IT", "Technicaal Associate");
obj.display();
