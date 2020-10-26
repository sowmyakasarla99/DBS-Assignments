var global = 20;
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.l = 50;
    }
    MyClass.prototype.local_data = function () {
        var l = 10;
        return l;
    };
    MyClass.static_var = 60;
    return MyClass;
}());
console.log("global variable : " + global);
console.log("static variable : " + MyClass.static_var);
var myClass = new MyClass();
console.log("class variable : " + myClass.l);
console.log("local variable : " + myClass.local_data());
