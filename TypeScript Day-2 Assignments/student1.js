var Student = /** @class */ (function () {
    function Student(id, name, stream) {
        this.id = 1;
        this.name = "Sowmya Reddy";
        this.stream = "IT";
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    Student.prototype.display = function () {
        console.log("Id : " + this.id + " Name: " + this.name + " Stream : " + this.stream);
    };
    return Student;
}());
var Obj = new Student(101, "Sowmya", "Information Technology");
Obj.display();
